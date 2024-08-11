import { tryCatchRequest } from 'services/utils/tryCatchRequest';
import api from '.';

export const getAssetsManifest = (host: string) => {
  return tryCatchRequest(() => api.get(`${host}/microfrontend-manifest.json`));
};
