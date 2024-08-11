import { ResponseAPI } from 'services/api/types';

export interface Stores {
  cycleId: number;
  number: number;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

export type StoresResponse = ResponseAPI<Stores[]>;

export interface UserStores {
  code: number;
  name: string;
  channel: string;
}

export type UserStoresResponse = ResponseAPI<UserStores[]>;

export interface ValidateStores {
  invalidStores: number[];
  validStores: {
    storeId: number;
    channelName: string;
  }[];
}

export type ValidateStoresResponse = ResponseAPI<ValidateStores>;
