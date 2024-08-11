import { action } from 'typesafe-actions';
import { StoreTypes, Store } from './types';

export const getStores = () => action(StoreTypes.STORES_REQUEST);

export const getStoresSuccess = (data: Store[]) =>
  action(StoreTypes.STORES_SUCCESS, data);
