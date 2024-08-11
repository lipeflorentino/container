import { tryCatchRequest } from 'services/utils/tryCatchRequest';
import api from 'services/api/extranet';

import paths from './paths';
import { SignInRequest, SignInResponse } from './types';

export const signInEndpoint =
  ({ userName, password, recaptcha }: SignInRequest) =>
  (): SignInResponse => {
    return tryCatchRequest(() =>
      api.post(paths.auth.signIn, {
        userName,
        password,
        recaptcha,
      }),
    );
  };

export const setHashPasswordEndpoint = (password: string) => () => {
  return tryCatchRequest(() =>
    api.post(paths.auth.authentication, { password }),
  );
};
