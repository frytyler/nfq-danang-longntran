import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESSFULLY } from './constants';

function fetchUsers() {
  return {
    type: FETCH_USERS,
  };
}

function fetchUsersSuccessfully(users) {
  return {
    type: FETCH_USERS_SUCCESSFULLY,
    payload: users,
  };
}

function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
}

export {
  fetchUsers,
  fetchUsersSuccessfully,
  fetchUsersError,
};
