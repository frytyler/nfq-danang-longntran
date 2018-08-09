import {
  FETCH_JOBS_SUCCESSFULLY,
  SAVE_JOB,
  REMOVE_JOB,
  UPDATE_JOB,
  SEARCH_JOB,
  SEARCH_JOB_SUCCESSFULLY,
  CREATE_JOB_AUTOMATICALLY,
} from './constants';

function fetchJobsSuccessfully(jobs) {
  return {
    type: FETCH_JOBS_SUCCESSFULLY,
    payload: jobs,
  };
}

function saveJob(job) {
  return {
    type: SAVE_JOB,
    payload: job,
  };
}

function updateJob(job) {
  return {
    type: UPDATE_JOB,
    payload: job,
  };
}

function removeJob(job) {
  return {
    type: REMOVE_JOB,
    payload: job,
  };
}

function searchJob(criteria) {
  return {
    type: SEARCH_JOB,
    payload: criteria,
  };
}

function createJobAutomatically() {
  return {
    type: CREATE_JOB_AUTOMATICALLY,
  };
}

function searchJobSuccessfully(criteria) {
  return {
    type: SEARCH_JOB_SUCCESSFULLY,
    payload: criteria,
  };
}

export {
  fetchJobsSuccessfully,
  saveJob,
  removeJob,
  updateJob,
  searchJob,
  searchJobSuccessfully,
  createJobAutomatically,
};
