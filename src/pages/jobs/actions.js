import {
  FETCH_JOBS_SUCCESSFULLY,
  SAVE_JOB,
  SAVE_JOB_SUCCESSFULLY,
  REMOVE_JOB,
  REMOVE_JOB_SUCCESSFULLY,
  UPDATE_JOB,
  UPDATE_JOB_SUCCESSFULLY, SEARCH_JOB, SEARCH_JOB_SUCCESSFULLY,
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

function saveJobSuccessfully(job) {
  return {
    type: SAVE_JOB_SUCCESSFULLY,
    payload: job,
  };
}

function updateJob(job) {
  return {
    type: UPDATE_JOB,
    payload: job,
  };
}

function updateJobSuccessfully(job) {
  return {
    type: UPDATE_JOB_SUCCESSFULLY,
    payload: job,
  };
}

function removeJob(job) {
  return {
    type: REMOVE_JOB,
    payload: job,
  };
}

function removeJobSuccessfully(deletedJob) {
  return {
    type: REMOVE_JOB_SUCCESSFULLY,
    payload: deletedJob,
  };
}

function searchJob(criteria) {
  return {
    type: SEARCH_JOB,
    payload: criteria,
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
  saveJobSuccessfully,
  removeJob,
  removeJobSuccessfully,
  updateJob,
  updateJobSuccessfully,
  searchJob,
  searchJobSuccessfully,
};
