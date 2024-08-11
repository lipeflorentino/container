import { all, takeLatest, call, put } from 'redux-saga/effects';

import { GENERAL_TYPES } from 'store/modules/general';

import { getPersonsEndpoint, Person } from 'services/api/extranet/persons';

import { PersonTypes } from './types';

import { getPersonsSuccess } from './actions';

export function* personsRequest() {
  const request = getPersonsEndpoint();

  const { response, error } = yield call(request);

  if (error) {
    console.log('error', 'getPersons', error);

    return;
  }

  const convertedItems = response.data.data.map((person: Person) => ({
    value: person.personId.toString(),
    label: person.name.toLocaleLowerCase(),
  }));

  yield put(getPersonsSuccess(convertedItems));
}

export default all([
  takeLatest(PersonTypes.PERSONS_REQUEST, personsRequest),
  takeLatest(GENERAL_TYPES.POPULATE_FIELDS, personsRequest),
]);
