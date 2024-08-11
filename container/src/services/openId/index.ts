import { UserManager, WebStorageStateStore } from 'oidc-client';

import environment from 'environments/environment';

const oidcStorageKey = `oidc.user:${environment.authentication.IDENTITY_CONFIG.authority}:${environment.authentication.IDENTITY_CONFIG.client_id}`;

let userManager: UserManager;

const config = {
  ...environment.authentication.IDENTITY_CONFIG,
  userStore: new WebStorageStateStore({
    store: global.window.sessionStorage,
  }),
  metadata: {
    ...environment.authentication.METADATA_OIDC,
  },
};

const initializeOpenId = (renewAccessToken?: (newToken: string) => void) =>
  new Promise(res => {
    userManager = new UserManager(config);

    userManager.events.addAccessTokenExpiring(() => {
      userManager.getUser().then(user => {
        if (renewAccessToken && user?.access_token) {
          renewAccessToken(user.access_token);
        }
      });
    });

    res(userManager);
  });

const signRedirect = (): Promise<void> => {
  return userManager.signinRedirect({});
};

const logout = () => {
  userManager.clearStaleState();

  sessionStorage.removeItem('userToken');
  sessionStorage.removeItem('redirect_url_extranet');

  const oidcStorage = JSON.parse(sessionStorage[oidcStorageKey] || '{}');

  userManager.signoutRedirect({
    id_token_hint: oidcStorage.id_token,
  });
};

export default {
  initializeOpenId,
  signRedirect,
  logout,
};
