import { tryCatchRequest } from 'services/utils/tryCatchRequest';
import api from 'services/api/extranet';

import paths from './paths';
import { ProfileResponse } from './types';

export const getProfileInfoEndpoint = () => (): ProfileResponse => {
  return tryCatchRequest(() => api.get(paths.profile.default));
};
