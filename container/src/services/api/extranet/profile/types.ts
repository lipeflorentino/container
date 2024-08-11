import { ResponseAPI } from 'services/api/types';

export interface Profile {
  email: string;
  registration: string;
  personId: number;
  personType: string;
  userName: string;
  profile: string;
  userChannels: string[];
  cpId: number;
  role: string;
  accessAsAdmin: boolean;
  club: string;
  isFirstAccess: boolean;
  brands: number[];
  stores?: string[];
}

export type ProfileResponse = ResponseAPI<Profile>;
