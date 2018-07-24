import { put, call, takeLatest } from 'redux-saga/effects';

import { FETCH_JOBS } from './constants';
import { fetchJobsError } from './actions';
import jobRef from './../../firebase.config';

export function* fetchJobsWorker() {
  try {
    yield call(jobRef.on('value', (data) => {
    }));
  } catch (err) {
    yield put(fetchJobsError(err));
  }
}

export default function* githubData() {
  yield takeLatest(FETCH_JOBS, fetchJobsWorker);
}
