import { call, takeLatest, put, select } from 'redux-saga/effects';

import { searchJob } from '../../services/nasaServices';
import { NASA_SEARCH, nasaSearch } from './actions';
import { CREATE_ITEM } from './constants';
import { rsf } from '../../firebase';
import { getData } from './selectors';

function* searchWorker({ payload: { criteria } }) {
  const {
    collection: { items },
  } = yield call(searchJob, criteria);
  if (items.length <= 0) {
    return yield put(nasaSearch.success([]));
  }

  const formattedItems = items.reduce((result, item) => {
    const data = item.data[0];
    data.mediaFile = item.links[0].href;
    return result.concat(data);
  }, []);

  return yield put(nasaSearch.success(formattedItems));
}

function* createItemWorker({ payload }) {
  const newItem = payload;
  newItem.createdAt = new Date().getTime();

  const data = yield select(getData);
  const index = data.findIndex(item => item.nasa_id === newItem.nasa_id);
  data.splice(index, 1);

  yield put(nasaSearch.success([...data]));
  yield call(rsf.database.create, 'jobs', newItem);
}

export default function* nasaSagas() {
  yield takeLatest(NASA_SEARCH.REQUEST, searchWorker);
  yield takeLatest(CREATE_ITEM, createItemWorker);
}
