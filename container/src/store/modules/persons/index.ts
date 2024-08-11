import { Reducer } from 'redux';
import produce from 'immer';

import { PersonTypes, PersonsState } from './types';

export const INITIAL_STATE: PersonsState = {
  data: [],
};

const reducer: Reducer<PersonsState> = (
  state = INITIAL_STATE,
  action = { type: '', payload: {} },
) => {
  return produce(state, draft => {
    switch (action.type) {
      case PersonTypes.PERSONS_SUCCESS:
        draft.data = action.payload;
        break;
      default:
    }
  });
};

export default reducer;
