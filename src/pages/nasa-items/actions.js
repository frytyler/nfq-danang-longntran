import { createAction, createRequestTypes } from '../../utils/actionCreator';
import {
  LOAD_ITEMS_SUCCESSFULLY,
  SAVE_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
} from './constants';
import { REQUEST, SUCCESS } from '../../utils/constants';

export const loadItemsSuccessfully = items => createAction(LOAD_ITEMS_SUCCESSFULLY, items);
export const saveItem = item => createAction(SAVE_ITEM, item);
export const updateItem = item => createAction(UPDATE_ITEM, item);
export const removeItem = key => createAction(REMOVE_ITEM, key);

export const NASA_FILTER = createRequestTypes('NASA_FILTER');
export const nasaFilterAction = {
  request: criteria => createAction(NASA_FILTER[REQUEST], criteria),
  success: criteria => createAction(NASA_FILTER[SUCCESS], criteria),
};
