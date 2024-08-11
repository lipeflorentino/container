import { all, takeLatest, call, put } from 'redux-saga/effects';

import { GENERAL_TYPES } from 'store/modules/general';

import { getStoresEndpoint } from 'services/api/extranet/stores';

import { Store, StoreTypes } from './types';

import { getStoresSuccess } from './actions';

export function* storesRequest() {
  const request = getStoresEndpoint();

  const { response, error } = yield call(request);

  if (error) {
    console.log('error', 'getStores', error);

    return;
  }

  const optionsStores = response.data.data.map((store: Store) => ({
    ...store,
    label: `${store.channelName === 'Loja' ? 'LJ' : store.channelName} ${
      store.storeId
    }`,
    value: store.storeId.toString(),
  }));

  yield put(getStoresSuccess(optionsStores));
}

export default all([
  takeLatest(StoreTypes.STORES_REQUEST, storesRequest),
  takeLatest(GENERAL_TYPES.POPULATE_FIELDS, storesRequest),
]);
