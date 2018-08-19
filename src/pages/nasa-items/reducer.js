import NasaItemsState from './model';
import { LOAD_ITEMS_SUCCESSFULLY, SEARCH_ITEM_SUCCESSFULLY } from './constants';

function jobsReducer(state = NasaItemsState(), { type, payload }) {
  switch (type) {
    case LOAD_ITEMS_SUCCESSFULLY:
      return state.set('data', payload);
    case SEARCH_ITEM_SUCCESSFULLY:
      return state.set('criteria', payload);
    default:
      return state;
  }
}

export default jobsReducer;
