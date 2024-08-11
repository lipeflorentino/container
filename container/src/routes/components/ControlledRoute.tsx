import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { ROUTE_PATH } from 'routes/paths';
import openId from 'services/openId';

import { ApplicationState } from 'store/store.interface';

interface ControlledRouteProps extends RouteProps {
  isPrivate?: boolean;
}

function ControlledRoute({ isPrivate, ...rest }: ControlledRouteProps) {
  const { signed } = useSelector((state: ApplicationState) => state.auth);

  // if (!signed && isPrivate) {
  //   const currentLocation = `${rest.location?.pathname}`;

  //   if (!currentLocation.includes('/sair')) {
  //     sessionStorage.setItem('redirect_url_extranet', currentLocation);
  //   }

  //   openId.initializeOpenId().then(() => {
  //     openId.signRedirect();
  //   });

  //   return <p>LOADING</p>;
  // }

  // if (signed && !isPrivate) {
  //   return <Redirect to={ROUTE_PATH.BULLETINS} />;
  // }

  return <Route {...rest} />;
}

ControlledRoute.defaultProps = {
  isPrivate: false,
};

export default ControlledRoute;
