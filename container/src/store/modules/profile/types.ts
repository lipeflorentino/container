import { UserStore } from '../stores/types';

export enum PROFILE_TYPES {
  PROFILE_REQUEST = '@profile/PROFILE_REQUEST',
  PROFILE_SUCCESS = '@profile/PROFILE_SUCCESS',
  PROFILE_ERROR = '@profile/PROFILE_ERROR',
  PROFILE_UPDATE_BRANDS = '@profile/PROFILE_UPDATE_BRANDS',
  PROFILE_UPDATE_BRANDS_SUCCESS = '@profile/PROFILE_UPDATE_BRANDS_SUCCESS',
  PROFILE_UPDATE_BRANDS_ERROR = '@profile/PROFILE_UPDATE_BRANDS_ERROR',
  PROFILE_RESET = '@profile/PROFILE_RESET',
}

export interface Profile {
  personId: number;
  registration: string;
  personType: string;
  userName: string;
  profile: string;
  email: string;
  name: string;
  channels: string[];
  cpId: number;
  role: string;
  club: string | null;
  isFirstAccess: boolean;
  stores?: UserStore[];
  brands: number[];
}

export interface ProfileState {
  readonly name: string;
  readonly email: string;
  readonly registration: string;
  readonly personType: string;
  readonly userName: string;
  readonly profile: string;
  readonly personId: number;
  readonly channels: string[];
  readonly cpId: number;
  readonly role: string;
  readonly club: string | null;
  readonly isFirstAccess: boolean;
  readonly stores?: UserStore[];
  readonly profileLoading: boolean;
  readonly brands: number[];
  readonly brandsLoading: boolean;
}
