import { isEmpty } from 'lodash';
import { call, takeLatest, put } from 'redux-saga/effects';

import { searchJob } from '../../services/nasaServices';
import { searchItemsSuccessfully, updateCriteria } from './actions';
import { CREATE_ITEM, SEARCH_ITEMS } from './constants';
import { rsf } from '../../firebase';

export function* searchWorker({ payload }) {
  yield put(updateCriteria(payload));

  const { collection: { items } } = yield call(searchJob, payload);
  if (isEmpty(items)) {
    return yield put(searchItemsSuccessfully([]));
  }

  const formattedItems = items.reduce((result, item) => {
    const data = item.data[0];
    data.mediaFile = item.links[0].href;
    return result.concat(data);
  }, []);

  return yield put(searchItemsSuccessfully(formattedItems));
}

function* createItemWorker({ payload }) {
  const newItem = payload;
  newItem.createdAt = new Date().getTime();
  yield call(rsf.database.create, 'jobs', newItem);
}

export default function* nasaSagas() {
  yield takeLatest(SEARCH_ITEMS, searchWorker);
  yield takeLatest(CREATE_ITEM, createItemWorker);
}
