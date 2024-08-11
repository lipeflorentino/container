import { action } from 'typesafe-actions';
import { AuthTypes } from './types';

export const tokenSuccess = (token: string) =>
  action(AuthTypes.TOKEN_SUCCESS, { token });

export const signFailure = () => action(AuthTypes.SIGN_FAILURE);

export const signReset = () => action(AuthTypes.SIGN_RESET);
