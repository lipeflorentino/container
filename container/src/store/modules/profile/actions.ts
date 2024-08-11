import { action } from 'typesafe-actions';

import { Profile, PROFILE_TYPES } from './types';

export const getProfile = () => action(PROFILE_TYPES.PROFILE_REQUEST);

export const getProfileSuccess = (profile: Profile) =>
  action(PROFILE_TYPES.PROFILE_SUCCESS, profile);

export const getProfileError = () => action(PROFILE_TYPES.PROFILE_ERROR);

export const updateProfileBrands = (brands: string[]) =>
  action(PROFILE_TYPES.PROFILE_UPDATE_BRANDS, { brands });

export const updateProfileBrandsSuccess = (brands: number[]) =>
  action(PROFILE_TYPES.PROFILE_UPDATE_BRANDS_SUCCESS, { brands });

export const updateProfileBrandsError = () =>
  action(PROFILE_TYPES.PROFILE_UPDATE_BRANDS_ERROR);

export const profileReset = () => action(PROFILE_TYPES.PROFILE_RESET);
