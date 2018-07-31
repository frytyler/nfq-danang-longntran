import { put, call, takeLatest, take, fork } from 'redux-saga/effects';

import { eventChannel } from 'redux-saga';
import jobService from '../../services';
import { searchJobSuccessfully } from './actions';
import { REMOVE_JOB, SAVE_JOB, SEARCH_JOB, UPDATE_JOB } from './constants';

function subscribe() {
  return eventChannel(emit => jobService.subscribe(emit));
}

function* loadJobs() {
  const channel = yield call(subscribe);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* saveJobWorker({ payload }) {
  try {
    const values = payload;
    const mediaUrl = yield call(jobService.uploadMedia, values.mediaFile);
    values.mediaFile = mediaUrl;
    values.createdAt = new Date().getTime();

    yield call(jobService.push(values));
  } catch (err) {
    // handle error here
  }
}

export function* updateJobWorker({ payload }) {
  try {
    const jobKey = payload.key;
    const values = {
      title: payload.title,
      desc: payload.desc,
      mediaFile: payload.mediaFile,
    };

    if (typeof payload.mediaFile.name === 'string') {
      const mediaUrl = yield call(jobService.uploadMedia, payload.mediaFile);
      values.mediaFile = mediaUrl;
    }
    yield call(jobService.update(jobKey, values));
  } catch (err) {
    // handle error here
  }
}

export function* removeJobWorker({ payload }) {
  try {
    yield call(jobService.remove(payload.key));
  } catch (err) {
    // handle error here
  }
}

export function* searchJobWorker() {
  while (true) {
    const { payload: { criteria } } = yield take(SEARCH_JOB);
    yield put(searchJobSuccessfully(criteria));
  }
}

export default function* githubData() {
  yield [
    fork(loadJobs),
    fork(searchJobWorker),
  ];
  yield takeLatest(SAVE_JOB, saveJobWorker);
  yield takeLatest(UPDATE_JOB, updateJobWorker);
  yield takeLatest(REMOVE_JOB, removeJobWorker);
  // yield takeLatest(SEARCH_JOB, searchJobWorker);
}
