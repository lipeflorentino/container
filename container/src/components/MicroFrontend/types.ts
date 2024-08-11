import { Profile } from 'store/modules/profile/types';

export interface ContainerContext {
  user: Profile;
  token: string;
}
