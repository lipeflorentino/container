import { tryCatchRequest } from 'services/utils/tryCatchRequest';
import api from 'services/api/extranet';

import paths from './paths';
import {
  StoresResponse,
  UserStoresResponse,
  ValidateStoresResponse,
} from './types';

export const getStoresEndpoint = () => (): StoresResponse => {
  return tryCatchRequest(() => api.get(paths.stores.default));
};

export const getUserStoresEndpoint = () => (): UserStoresResponse => {
  return tryCatchRequest(() => api.get(paths.userStores.default));
};

export const validateStores =
  (storeIds: number[]) => (): ValidateStoresResponse => {
    return tryCatchRequest(() => api.post('/stores/validate', storeIds));
  };
