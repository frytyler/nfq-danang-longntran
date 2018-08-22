import NasaItemsState from './model';
import { LOAD_ITEMS_SUCCESSFULLY } from './constants';
import { NASA_FILTER } from './actions';
import { SUCCESS } from '../../utils/constants';

function jobsReducer(state = NasaItemsState(), { type, payload }) {
  switch (type) {
    case LOAD_ITEMS_SUCCESSFULLY:
      return state.set('data', payload);
    case NASA_FILTER[SUCCESS]:
      return state.set('criteria', payload);
    default:
      return state;
  }
}

export default jobsReducer;
