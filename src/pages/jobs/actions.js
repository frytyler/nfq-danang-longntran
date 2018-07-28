import {
  FETCH_JOBS,
  FETCH_JOBS_ERROR,
  FETCH_JOBS_SUCCESSFULLY,
  SAVE_JOB,
  SAVE_JOB_ERROR,
  SAVE_JOB_SUCCESSFULLY,
  REMOVE_JOB,
  REMOVE_JOB_SUCCESSFULLY,
  REMOVE_JOB_ERROR,
} from './constants';

function fetchJobs() {
  return {
    type: FETCH_JOBS,
  };
}

function fetchJobsSuccessfully(jobs) {
  return {
    type: FETCH_JOBS_SUCCESSFULLY,
    payload: jobs,
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

function saveJobSuccessfully() {
  return {
    type: SAVE_JOB_SUCCESSFULLY,
  };
}

function saveJobFailed(error) {
  return {
    type: SAVE_JOB_ERROR,
    payload: error,
  };
}


function removeJob(job) {
  return {
    type: REMOVE_JOB,
    payload: job,
  };
}

function removeJobSuccessfully() {
  return {
    type: REMOVE_JOB_SUCCESSFULLY,
  };
}

function removeJobFailed(error) {
  return {
    type: REMOVE_JOB_ERROR,
    payload: error,
  };
}

export {
  fetchJobs,
  fetchJobsSuccessfully,
  fetchJobsError,
  saveJob,
  saveJobSuccessfully,
  saveJobFailed,
  removeJob,
  removeJobSuccessfully,
  removeJobFailed,
};
