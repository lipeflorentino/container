import { tryCatchRequest } from 'services/utils/tryCatchRequest';
import api from 'services/api/identity';

import paths from './paths';

export const validateUserEndpoint = (token: string) => () => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return tryCatchRequest(() => api.get(paths.validateUser.default, config));
};
