import { Reducer } from 'redux';
import produce from 'immer';

import { StoreTypes, StoreState } from './types';

export const INITIAL_STATE: StoreState = {
  data: [],
};

const reducer: Reducer<StoreState> = (
  state = INITIAL_STATE,
  action = { type: '', payload: {} },
) => {
  return produce(state, draft => {
    switch (action.type) {
      case StoreTypes.STORES_SUCCESS:
        draft.data = action.payload;
        break;
      default:
    }
  });
};

export default reducer;
