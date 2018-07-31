import { JobState } from './model';
import {
  FETCH_JOBS_SUCCESSFULLY,
  REMOVE_JOB_SUCCESSFULLY,
  SAVE_JOB_SUCCESSFULLY,
  UPDATE_JOB_SUCCESSFULLY,
  SEARCH_JOB_SUCCESSFULLY,
} from './constants';

function jobsReducer(state = JobState(), { type, payload }) {
  switch (type) {
    case FETCH_JOBS_SUCCESSFULLY:
      return state.set('jobs', payload);
    case UPDATE_JOB_SUCCESSFULLY:
      return state.set('jobs', state.jobs.map(job => (job.key === payload.key ? payload : job)));
    case SAVE_JOB_SUCCESSFULLY: {
      const { jobs } = state.toJS();
      jobs.push(payload);
      return state.set('jobs', jobs);
    }
    case REMOVE_JOB_SUCCESSFULLY:
      return state.set('jobs', state.jobs.filter(job => (job.key !== payload.key)));
    case SEARCH_JOB_SUCCESSFULLY:
      return state.set('criteria', payload);
    default:
      return state;
  }
}

export default jobsReducer;
