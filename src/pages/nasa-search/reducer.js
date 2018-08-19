import NasaSearchState from './model';
import { NASA_SEARCH } from './actions';

function nasaSearchReducer(state = NasaSearchState(), { type, payload }) {
  switch (type) {
    case NASA_SEARCH.SUCCESS:
      return state.set('data', payload.response);
    default:
      return state;
  }
}

export default nasaSearchReducer;
