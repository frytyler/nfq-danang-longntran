import {
  CREATE_ITEM,
  SEARCH_ITEMS,
  SEARCH_ITEMS_SUCCESSFULLY, UPDATE_CRITERIA,
} from './constants';

function searchItems(criteria) {
  return {
    type: SEARCH_ITEMS,
    payload: criteria,
  };
}

function createItem(item) {
  return {
    type: CREATE_ITEM,
    payload: item,
  };
}

function updateCriteria(criteria) {
  return {
    type: UPDATE_CRITERIA,
    payload: criteria,
  };
}

function searchItemsSuccessfully(items) {
  return {
    type: SEARCH_ITEMS_SUCCESSFULLY,
    payload: items,
  };
}

export {
  searchItems,
  createItem,
  updateCriteria,
  searchItemsSuccessfully,
};
