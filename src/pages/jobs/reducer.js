import { fromJS } from 'immutable';

import { FETCH_JOBS } from './constants';

const initialState = fromJS({
  jobs: false,
});

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return state.set('jobs', action.payload);
    default:
      return state;
  }
}

export default jobsReducer;
