import { combineReducers } from 'redux';

import auth from './auth';
import persons from './persons';
import profile from './profile';
import stores from './stores';
// ## new import here ##

export default combineReducers({
  auth,
  persons,
  profile,
  stores,
  // ## new reducer here ##
});
