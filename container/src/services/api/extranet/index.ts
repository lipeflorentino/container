/* eslint-disable no-param-reassign */
import axios from 'axios';

import history from 'services/utils/history';
import { getToken } from 'services/utils/token';

import environment from 'environments/environment';

const WHITELIST = ['/authentication'];

const api = axios.create({
  baseURL: `${environment.api.urlBase}/api`,
});

api.interceptors.request.use(config => {
  if (!WHITELIST.includes(config.url || '')) {
    const token = getToken();
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (
      !WHITELIST.includes(error.response.config.url) &&
      error.response.status === 401
    ) {
      history.push('/sair');
    }

    return Promise.reject(error);
  },
);

export default api;
