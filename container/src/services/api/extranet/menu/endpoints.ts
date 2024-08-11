import { tryCatchRequest } from 'services/utils/tryCatchRequest';
import api from 'services/api/extranet';

import paths from './paths';
import { MenuResponse } from './types';

export const getMenuItemsEndpoint = () => (): MenuResponse => {
  return tryCatchRequest(() => api.get(paths.menu.default));
};
