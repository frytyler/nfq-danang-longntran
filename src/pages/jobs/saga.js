import { put, call, takeLatest } from 'redux-saga/effects';

import { FETCH_JOBS } from './constants';
import { fetchJobsError } from './actions';
import jobRef from './../../firebase.config';

export function* fetchJobsWorker() {
  try {
    // const repos = yield call(request, requestURL);
    // const username = "nhulongctk10";
    // yield put(fetchJobsSuccessfully(repos, username));

    const resp = yield call(jobRef.on('value', (data) => {
      console.log(data);
    }));
    console.log(resp);
  } catch (err) {
    yield put(fetchJobsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(FETCH_JOBS, fetchJobsWorker);
}
