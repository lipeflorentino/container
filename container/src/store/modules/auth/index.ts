import { Reducer } from 'redux';
import produce from 'immer';
import { AuthState, AuthTypes } from './types';

export const INITIAL_STATE: AuthState = {
  error: false,
  loading: false,
  token: null,
  signed: false,
};

const reducer: Reducer<AuthState> = (
  state = INITIAL_STATE,
  action = { type: '', payload: {} },
) => {
  return produce(state, draft => {
    switch (action.type) {
      case AuthTypes.TOKEN_SUCCESS:
        draft.loading = false;
        draft.token = action.payload.token;
        draft.signed = true;
        draft.error = false;
        break;
      case AuthTypes.SIGN_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
      case AuthTypes.SIGN_RESET:
        return INITIAL_STATE;
      default:
    }
  });
};

export default reducer;
