import { Reducer } from 'redux';
import produce from 'immer';
import { PROFILE_TYPES, ProfileState } from './types';

export const INITIAL_STATE: ProfileState = {
  name: '',
  personId: 0,
  email: '',
  registration: '',
  personType: '',
  userName: '',
  profile: '',
  channels: [],
  cpId: 0,
  role: '',
  club: null,
  isFirstAccess: false,
  stores: [],
  profileLoading: true,
  brands: [],
  brandsLoading: false,
};

const reducer: Reducer<ProfileState> = (
  state = INITIAL_STATE,
  action = { type: '', payload: {} },
) => {
  return produce(state, draft => {
    switch (action.type) {
      case PROFILE_TYPES.PROFILE_REQUEST:
        draft.profileLoading = true;
        break;
      case PROFILE_TYPES.PROFILE_SUCCESS:
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.personType = action.payload.personType;
        draft.userName = action.payload.userName;
        draft.profile = action.payload.profile;
        draft.personId = action.payload.personId;
        draft.registration = action.payload.registration;
        draft.channels = action.payload.channels;
        draft.cpId = action.payload.cpId;
        draft.role = action.payload.role;
        draft.club = action.payload.club;
        draft.isFirstAccess = action.payload.isFirstAccess;
        draft.stores = action.payload.stores;
        draft.brands = action.payload.brands;
        draft.profileLoading = false;
        break;
      case PROFILE_TYPES.PROFILE_ERROR:
        draft.profileLoading = false;
        break;
      case PROFILE_TYPES.PROFILE_UPDATE_BRANDS:
        draft.brandsLoading = true;
        break;
      case PROFILE_TYPES.PROFILE_UPDATE_BRANDS_SUCCESS:
        draft.brands = action.payload.brands;
        draft.brandsLoading = false;
        break;
      case PROFILE_TYPES.PROFILE_UPDATE_BRANDS_ERROR:
        draft.brandsLoading = false;
        break;
      case PROFILE_TYPES.PROFILE_RESET:
        return INITIAL_STATE;
      default:
    }
  });
};

export default reducer;
