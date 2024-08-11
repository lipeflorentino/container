import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { ApplicationState } from 'store/store.interface';
import { populateFields } from 'store/modules/general';
import { signFailure, tokenSuccess } from 'store/modules/auth/actions';
import { getProfile } from 'store/modules/profile/actions';

import openId from 'services/openId';
import { validateUserEndpoint } from 'services/api/identity/validate-user';
import { getToken } from 'services/utils/token';

import Navbar from 'components/Navbar';
import MicroFrontendWrapper from 'components/MicroFrontend';
import ControlledRoute from './components/ControlledRoute';

import { MICRO_FRONTENDS, PUBLIC_ROUTES, PRIVATE_ROUTES } from './data';

const Routes = () => {
  const dispatch = useDispatch();

  const [endInitValidations, setEndInitValidations] = useState(false);

  const { auth, isProfileLoading } = useSelector((state: ApplicationState) => ({
    auth: state.auth,
    isProfileLoading: state.profile.profileLoading,
  }));

  const token = useMemo(() => getToken(), []);

  const showLoading = useMemo(() => {
    if (token && !auth.error) {
      return isProfileLoading;
    }

    if (!auth.signed && !token) {
      return !endInitValidations;
    }

    return !endInitValidations;
  }, [auth.signed, auth.error, isProfileLoading, endInitValidations, token]);

  const checkValidUser = async (currentToken: string) => {
    const request = validateUserEndpoint(currentToken);

    const { error } = await request();

    return !error;
  };

  const getUser = useCallback(
    async (currentToken: string) => {
      const isValid = await checkValidUser(currentToken);

      if (!isValid) {
        console.log('Usuário não cadastrado');
        dispatch(signFailure());
        setEndInitValidations(true);

        return;
      }

      dispatch(tokenSuccess(currentToken));
      setEndInitValidations(true);
    },
    [dispatch],
  );

  useEffect(() => {
    if (auth.signed && endInitValidations) {
      dispatch(getProfile());
      dispatch(populateFields());
    }
  }, [auth.signed, dispatch, endInitValidations]);

  useEffect(() => {
    if (token) {
      getUser(token);

      return;
    }

    setEndInitValidations(true);
  }, [getUser, token]);

  useEffect(() => {
    if (auth.signed && !showLoading) {
      openId.initializeOpenId((newToken: string) => {
        sessionStorage.setItem('userToken', newToken);
      });
    }
  }, [auth.signed, showLoading, dispatch]);

  return (
    <>
      <Switch>
        {PUBLIC_ROUTES.map(route => (
          <ControlledRoute
            path={route.path}
            exact
            component={route.component}
            key={route.path}
          />
        ))}

        <ControlledRoute isPrivate>
          <Navbar dataTestId="navbar" />

          <Switch>
            {PRIVATE_ROUTES.map(route => (
              <Route
                path={route.path}
                component={route.component}
                exact
                key={route.path}
              />
            ))}

            {MICRO_FRONTENDS.map(
              (microFrontend: { path: string; host: string }) => (
                <Route
                  path={microFrontend.path}
                  render={(props: RouteComponentProps) => (
                    <MicroFrontendWrapper
                      history={props.history}
                      host={microFrontend.host}
                      path={microFrontend.path}
                    />
                  )}
                  key={microFrontend.path}
                />
              ),
            )}
          </Switch>
        </ControlledRoute>
      </Switch>
    </>
  );
};

export default Routes;
