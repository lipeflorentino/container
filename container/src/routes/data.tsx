import React from 'react';
import { Redirect } from 'react-router-dom';

import environment from 'environments/environment';

import { ROUTE_PATH } from 'routes/paths';

import Logout from './components/Logout';
import MicroFrontendRedirect from './components/MicroFrontendRedirect';

export const MICRO_FRONTENDS = [
  {
    path: ROUTE_PATH.MF_EXAMPLE_MICRO_FRONTEND,
    host: environment.microFrontendUrl.exemploMicroFrontend,
  },
];

export const PUBLIC_ROUTES = [
  {
    path: ROUTE_PATH.ROOT,
    component: () => <p>LOADING</p>,
  },
  {
    path: ROUTE_PATH.LOGIN,
    component: () => <Redirect to={ROUTE_PATH.ROOT} />,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: ROUTE_PATH.LOGOUT,
    component: Logout,
  },
  {
    path: ROUTE_PATH.BULLETINS,
    component: () => <div>COMUNICADOS</div>,
  },
  {
    path: ROUTE_PATH.MF_REDIRECT,
    component: MicroFrontendRedirect,
  },
];
