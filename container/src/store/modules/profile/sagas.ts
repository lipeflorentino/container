import { all, takeLatest, call, put } from 'redux-saga/effects';

import { getUserStoresEndpoint } from 'services/api/extranet/stores';
import {
  getProfileInfoEndpoint,
  Profile as ProfileAPI,
} from 'services/api/extranet/profile';

import { Profile, PROFILE_TYPES } from './types';
import { getProfileError, getProfileSuccess } from './actions';

function* addStoresToProfile(user: Profile) {
  const request = getUserStoresEndpoint();

  const { response, error } = yield call(request);

  if (error) {
    console.log('error', 'getUserStores', error);

    return { ...user, stores: [] };
  }

  return { ...user, stores: response.data.data as string[] };
}

export function* profileRequest() {
  const request = getProfileInfoEndpoint();

  const { response, error } = yield call(request);

  if (error) {
    console.log('error', 'getProfileInfo', error);
    yield put(getProfileError());
    return;
  }

  const profileInfoResponse: ProfileAPI = response.data.data;
  const profile: Profile = {
    name: profileInfoResponse.userName,
    email: profileInfoResponse.email,
    personId: profileInfoResponse.personId,
    personType: profileInfoResponse.personType,
    userName: profileInfoResponse.userName,
    profile: profileInfoResponse.profile,
    registration: profileInfoResponse.registration,
    channels: profileInfoResponse.userChannels,
    cpId: profileInfoResponse.cpId,
    role: profileInfoResponse.role,
    club: profileInfoResponse.club,
    isFirstAccess: profileInfoResponse.isFirstAccess,
    stores: [],
    brands: profileInfoResponse.brands,
  };

  const profileWithStores: Profile = yield addStoresToProfile(profile);

  yield put(getProfileSuccess(profileWithStores));
}

export default all([takeLatest(PROFILE_TYPES.PROFILE_REQUEST, profileRequest)]);
