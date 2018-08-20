import { createAction } from '../../utils/actionCreator';
import {
  LOAD_ITEMS_SUCCESSFULLY,
  SAVE_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SEARCH_ITEM,
  SEARCH_ITEM_SUCCESSFULLY,
} from './constants';

export const loadItemsSuccessfully = items => createAction(LOAD_ITEMS_SUCCESSFULLY, items);
export const saveJob = job => createAction(SAVE_ITEM, job);
export const updateJob = job => createAction(UPDATE_ITEM, job);
export const removeJob = job => createAction(REMOVE_ITEM, job);
export const searchJob = criteria => createAction(SEARCH_ITEM, criteria);
export const searchJobSuccessfully = criteria => createAction(SEARCH_ITEM_SUCCESSFULLY, criteria);
