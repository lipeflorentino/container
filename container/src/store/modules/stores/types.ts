export enum StoreTypes {
  STORES_REQUEST = '@stores/STORES_REQUEST',
  STORES_SUCCESS = '@stores/STORES_SUCCESS',
}

export interface Store {
  channelName?: string;
  cpId?: number;
  name: string;
  storeId: number;
  isChecked?: boolean;
  label: string;
  value: number | string;
}

export interface StoreState {
  readonly data: Store[];
}

export interface UserStore {
  code: number;
  name: string;
  channel: string;
}
