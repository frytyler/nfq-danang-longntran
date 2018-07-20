import { put, takeLatest } from 'redux-saga/effects';

import { FETCH_USERS } from './constants';
import { fetchUsersError } from './actions';
// import { usersSelector } from './selectors';

export function* fetchUsersWorker() {
  // Select username from store
  // const users = yield select(usersSelector());

  // const requestURL = 'https://jsonplaceholder.typicode.com/users';

  try {
    // const repos = yield call(request, requestURL);
    // const username = "nhulongctk10";
    // yield put(fetchUsersSuccessfully(repos, username));
  } catch (err) {
    yield put(fetchUsersError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(FETCH_USERS, fetchUsersWorker);
}
