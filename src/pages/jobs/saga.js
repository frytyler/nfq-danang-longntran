import { put, call, takeLatest, take, fork, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { rsf } from '../../firebase';
import { searchJob, getMediaAssets } from '../../services/nasaServices';
import { fetchJobsSuccessfully, searchJobSuccessfully } from './actions';
import { context, CREATE_JOB_AUTOMATICALLY, REMOVE_JOB, SAVE_JOB, SEARCH_JOB, UPDATE_JOB } from './constants';
import { getCriteria } from './selectors';

function* loadAsyncJob() {
  yield fork(
    rsf.database.sync,
    'jobs',
    { successActionCreator: fetchJobsSuccessfully, transform: mapToArray },
  );
}

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

function* uploadMediaFile(mediaFile) {
  try {
    const filePath = `images/longntran_${mediaFile.name}`;
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

function* loadNasaMediaAssets(nasaId) {
  const { collection: { items } } = yield call(getMediaAssets, nasaId);
  return items;
}

export function* createJobWorker({ payload }) {
  const newJob = payload;
  newJob.createdAt = new Date().getTime();

  if (payload.mediaFile) {
    const mediaUrl = yield call(uploadMediaFile, payload.mediaFile);
    newJob.mediaFile = mediaUrl;
  }

  yield call(rsf.database.create, context, newJob);
}

export function* createAutomaticallyJobWorker() {
  const criteria = yield select(getCriteria);
  const { collection: { items } } = yield call(searchJob, criteria);
  const {
    title, description, date_created, nasa_id,
  } = items[0].data[0];

  const [first] = yield call(loadNasaMediaAssets, nasa_id);
  const createdDate = new Date(date_created);
  const job = {
    title,
    description,
    createdAt: createdDate.getTime(),
    mediaFile: first.href,
  };
  yield call(rsf.database.create, context, job);
}

export function* updateJobWorker({ payload }) {
  try {
    const values = payload;
    if (typeof payload.mediaFile.name === 'string') {
      const mediaUrl = yield call(uploadMediaFile, payload.mediaFile);
      values.mediaFile = mediaUrl;
    }
    yield call(rsf.database.update, `${context}/${values.key}`, values);
  } catch (errMess) {
    throw new Error(errMess);
  }
}

export function* removeJobWorker({ payload }) {
  const { key } = payload;
  yield call(rsf.database.delete, `${context}/${key}`);
}

export function* searchJobWorker({ payload }) {
  try {
    const { criteria } = payload;
    yield put(searchJobSuccessfully(criteria));
  } catch (errorMsg) {
    throw new Error(errorMsg);
  }
}

export default function* jobSagas() {
  yield [
    fork(loadAsyncJob),
  ];
  yield takeLatest(SAVE_JOB, createJobWorker);
  yield takeLatest(UPDATE_JOB, updateJobWorker);
  yield takeLatest(REMOVE_JOB, removeJobWorker);
  yield takeLatest(SEARCH_JOB, searchJobWorker);
  yield takeLatest(CREATE_JOB_AUTOMATICALLY, createAutomaticallyJobWorker);
}
