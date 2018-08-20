import { eventChannel } from 'redux-saga';
import { put, call, takeLatest, take, fork } from 'redux-saga/effects';

import { rsf } from '../../firebase';
import { loadItemsSuccessfully, searchJobSuccessfully } from './actions';
import { REMOVE_ITEM, SAVE_ITEM, SEARCH_ITEM, UPDATE_ITEM } from './constants';

function mapToArray(data) {
  const values = data.value;
  const keys = Object.keys(data.value);
  const jobs = [];
  keys.map((key) => {
    const job = values[key];
    job.key = key;
    jobs.push(job);
  });
  return jobs;
}

function* loadAsyncJob() {
  yield fork(
    rsf.database.sync,
    'jobs',
    { successActionCreator: loadItemsSuccessfully, transform: mapToArray },
  );
}

function* uploadMediaFile(mediaFile) {
  try {
    const filePath = `images/${mediaFile.name}`;
    const task = rsf.storage.uploadFile(filePath, mediaFile);

    const channel = eventChannel(emit => task.on('state_changed', emit));
    yield take(channel);

    // wait upload finish
    yield task;
    return yield call(rsf.storage.getDownloadURL, filePath);
  } catch (errMess) {
    throw new Error(errMess);
  }
}

function* createJobWorker({ payload }) {
  const newJob = payload;
  newJob.createdAt = new Date().getTime();

  if (payload.mediaFile) {
    const mediaUrl = yield call(uploadMediaFile, payload.mediaFile);
    newJob.mediaFile = mediaUrl;
  }
  yield call(rsf.database.create, 'jobs', newJob);
}

function* updateJobWorker({ payload }) {
  try {
    const values = payload;
    if (typeof payload.mediaFile.name === 'string') {
      const mediaUrl = yield call(uploadMediaFile, payload.mediaFile);
      values.mediaFile = mediaUrl;
    }
    yield call(rsf.database.update, `${'jobs'}/${values.key}`, values);
  } catch (errMess) {
    throw new Error(errMess);
  }
}

function* removeJobWorker({ payload }) {
  const { key } = payload;
  yield call(rsf.database.delete, `${'jobs'}/${key}`);
}

function* searchJobWorker({ payload }) {
  try {
    const { criteria } = payload;
    yield put(searchJobSuccessfully(criteria));
  } catch (errorMsg) {
    throw new Error(errorMsg);
  }
}

export default function* jobSagas() {
  yield fork(loadAsyncJob);
  yield takeLatest(SAVE_ITEM, createJobWorker);
  yield takeLatest(UPDATE_ITEM, updateJobWorker);
  yield takeLatest(REMOVE_ITEM, removeJobWorker);
  yield takeLatest(SEARCH_ITEM, searchJobWorker);
}
