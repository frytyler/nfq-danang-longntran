import { isEmpty } from 'lodash';
import { call, takeLatest, put } from 'redux-saga/effects';

import { searchJob } from '../../services/nasaServices';
import { NASA_SEARCH, nasaSearch } from './actions';
import { CREATE_ITEM } from './constants';
import { rsf } from '../../firebase';

export function* searchWorker({ payload: { criteria } }) {
  const { collection: { items } } = yield call(searchJob, criteria);
  if (isEmpty(items)) {
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
  yield call(rsf.database.create, 'jobs', newItem);
}

export default function* nasaSagas() {
  yield takeLatest(NASA_SEARCH.REQUEST, searchWorker);
  yield takeLatest(CREATE_ITEM, createItemWorker);
}
