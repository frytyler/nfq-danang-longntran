import JobState from './model';
import {
  FETCH_JOBS_SUCCESSFULLY,
  SEARCH_JOB_SUCCESSFULLY,
} from './constants';

function jobsReducer(state = JobState(), { type, payload }) {
  switch (type) {
    case FETCH_JOBS_SUCCESSFULLY:
      return state.set('jobs', payload);
    case SEARCH_JOB_SUCCESSFULLY:
      return state.set('criteria', payload);
    default:
      return state;
  }
}

export default jobsReducer;
