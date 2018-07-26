import { put, call, takeLatest } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import jobService from '../../services';

import { FETCH_JOBS, SAVE_JOB } from './constants';
import { fetchJobsError } from './actions';

function subscribe() {
  return eventChannel(emit => jobService.subscribe(emit));
}

export function* fetchJobsWorker() {
  try {
    yield call(subscribe);
  } catch (err) {
    yield put(fetchJobsError(err));
  }
}

export function* saveJobsWorker({ payload }) {
  try {
    yield call(jobService.addTask(payload));
  } catch (err) {
    yield put(fetchJobsError(err));
  }
}

export default function* githubData() {
  yield takeLatest(FETCH_JOBS, fetchJobsWorker);
  yield takeLatest(SAVE_JOB, saveJobsWorker);
}
