import { FETCH_JOBS, FETCH_JOBS_ERROR, FETCH_JOBS_SUCCESSFULLY, SAVE_JOB } from './constants';

function fetchJobs() {
  return {
    type: FETCH_JOBS,
  };
}

function fetchJobsSuccessfully(users) {
  return {
    type: FETCH_JOBS_SUCCESSFULLY,
    payload: users,
  };
}

function fetchJobsError(error) {
  return {
    type: FETCH_JOBS_ERROR,
    payload: error,
  };
}

function saveJob(job) {
  return {
    type: SAVE_JOB,
    payload: job,
  };
}

export {
  fetchJobs,
  fetchJobsSuccessfully,
  fetchJobsError,
  saveJob,
};
