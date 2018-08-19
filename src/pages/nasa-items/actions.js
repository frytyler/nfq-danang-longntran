import {
  LOAD_ITEMS_SUCCESSFULLY,
  SAVE_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SEARCH_ITEM,
  SEARCH_ITEM_SUCCESSFULLY,
} from './constants';

function loadItemsSuccessfully(items) {
  return {
    type: LOAD_ITEMS_SUCCESSFULLY,
    payload: items,
  };
}

function saveJob(job) {
  return {
    type: SAVE_ITEM,
    payload: job,
  };
}

function updateJob(job) {
  return {
    type: UPDATE_ITEM,
    payload: job,
  };
}

function removeJob(job) {
  return {
    type: REMOVE_ITEM,
    payload: job,
  };
}

function searchJob(criteria) {
  return {
    type: SEARCH_ITEM,
    payload: criteria,
  };
}

function searchJobSuccessfully(criteria) {
  return {
    type: SEARCH_ITEM_SUCCESSFULLY,
    payload: criteria,
  };
}

export {
  loadItemsSuccessfully,
  saveJob,
  removeJob,
  updateJob,
  searchJob,
  searchJobSuccessfully,
};
