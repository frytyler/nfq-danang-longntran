import { put, call, takeLatest } from 'redux-saga/effects';
import { firebaseDb } from '../../firebase';
import jobService from '../../services';

import { FETCH_JOBS, SAVE_JOB } from './constants';
import { fetchJobsError, fetchJobsSuccessfully } from './actions';

/* eslint no-confusing-arrow: 0 */
function fetchJob() {
  return new Promise((resolve, reject) => {
    firebaseDb.ref('jobs')
      .on('value', snapshot => snapshot ? resolve(snapshot) : reject());
  });
}

export function* fetchJobsWorker() {
  try {
    const jobsSnapshot = yield fetchJob();
    const jobs = [];
    jobsSnapshot.forEach((jobSnap) => {
      const job = jobSnap.val();
      jobs.push(job);
    });
    yield put(fetchJobsSuccessfully(jobs));
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
