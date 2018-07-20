import { fromJS } from 'immutable';

import { FETCH_USERS } from './constants';

const initialState = fromJS({
  users: false,
});

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return state.set('users', action.payload);
    default:
      return state;
  }
}

export default usersReducer;
