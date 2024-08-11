import { tryCatchRequest } from 'services/utils/tryCatchRequest';
import api from 'services/api/extranet';
import { ResponseDefault } from 'services/api/types';

import paths from './paths';
import { PersonResponse } from './types';

export const getPersonsEndpoint = () => (): PersonResponse => {
  return tryCatchRequest(() =>
    api.get(paths.persons.default, {
      params: {
        active: true,
      },
    }),
  );
};

export const setFirstAccessEndpoint = () => (): ResponseDefault => {
  return tryCatchRequest(() => api.patch(paths.firstAccess.default));
};

export const updateProfileBrandsEndpoint =
  (personId: number, brands: number[]) => (): ResponseDefault => {
    return tryCatchRequest(() => api.patch(paths.brands.default, brands));
  };
