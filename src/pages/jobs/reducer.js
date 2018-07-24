import { fromJS } from 'immutable';

import { FETCH_JOBS_SUCCESSFULLY } from './constants';

const initialState = fromJS({
  jobs: false,
});

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS_SUCCESSFULLY:
      return state.set('jobs', action.payload);
    default:
      return state;
  }
}

export default jobsReducer;
