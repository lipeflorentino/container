import { AuthState } from './modules/auth/types';
import { PersonsState } from './modules/persons/types';
import { StoreState } from './modules/stores/types';
import { ProfileState } from './modules/profile/types';
// ## new import here ##

export interface ApplicationState {
  auth: AuthState;
  persons: PersonsState;
  stores: StoreState;
  profile: ProfileState;
  // ## new state here ##
}
