import { all } from 'redux-saga/effects';

import persons from './persons/sagas';
import profile from './profile/sagas';
import stores from './stores/sagas';
// ## new import here ##

export default function* rootSaga() {
  yield all([
    persons,
    profile,
    stores,
    // ## new saga here ##
  ]);
}
