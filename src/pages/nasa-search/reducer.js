import NasaState from './model';
import {
  UPDATE_CRITERIA,
  SEARCH_ITEMS_SUCCESSFULLY,
} from './constants';

function nasaReducer(state = NasaState(), { type, payload }) {
  switch (type) {
    case UPDATE_CRITERIA:
      return state.set('criteria', payload);
    case SEARCH_ITEMS_SUCCESSFULLY:
      return state.set('items', payload);
    default:
      return state;
  }
}

export default nasaReducer;
