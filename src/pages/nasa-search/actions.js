import { CREATE_ITEM } from './constants';
import { createAction, createRequestTypes } from '../../utils/actionCreator';
import { REQUEST, SUCCESS, FAILURE } from '../../utils/constants';

export const NASA_SEARCH = createRequestTypes('NASA_SEARCH');
export const nasaSearch = {
  request: criteria => createAction(NASA_SEARCH[REQUEST], { criteria }),
  success: response => createAction(NASA_SEARCH[SUCCESS], { response }),
  failure: error => createAction(NASA_SEARCH[FAILURE], { error }),
};

export function createItem(item) {
  return {
    type: CREATE_ITEM,
    payload: item,
  };
}
