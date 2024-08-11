export default {
  api: {
    urlBase: 'https://dapi-extranet.grupoboticario.digital',
  },
  microFrontendUrl: {
    exemploMicroFrontend: 'http://localhost:3020',
  },
  recaptcha: {
    siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    masterKey: '',
  },
  authentication: {
    IDENTITY_CONFIG: {
      authority:
        'https://hlogin.extranet.grupoboticario.com.br/c719b145-55c9-4915-9400-2b79245ee83d/v2.0',
      client_id: 'd095096c-d050-4189-98f7-a62cdd360ae1',
      redirect_uri: 'http://localhost:3000/auth/callback',
      login:
        'https://hlogin.extranet.grupoboticario.com.br/c719b145-55c9-4915-9400-2b79245ee83d/v2.0/login',
      automaticSilentRenew: false,
      loadUserInfo: false,
      post_logout_redirect_uri: 'http://localhost:3000/logout/callback',
      audience: 'http://extranet',
      response_type: 'code',
      grant_type: 'code',
      scope:
        'openid email https://gboticariob2chml.onmicrosoft.com/a5f056df-0d16-466f-8347-2b24f5ae60fb/extranet.api offline_access',
    },
    METADATA_OIDC: {
      issuer:
        'https://hlogin.extranet.grupoboticario.com.br/c719b145-55c9-4915-9400-2b79245ee83d/v2.0/',
      jwks_uri:
        'https://hlogin.extranet.grupoboticario.com.br/c719b145-55c9-4915-9400-2b79245ee83d/discovery/v2.0/keys?p=b2c_1a_jit_signuporsignin_hml',
      authorization_endpoint:
        'https://hlogin.extranet.grupoboticario.com.br/c719b145-55c9-4915-9400-2b79245ee83d/oauth2/v2.0/authorize?p=b2c_1a_jit_signuporsignin_hml',
      token_endpoint:
        'https://hlogin.extranet.grupoboticario.com.br/c719b145-55c9-4915-9400-2b79245ee83d/oauth2/v2.0/token?p=b2c_1a_jit_signuporsignin_hml',
      userinfo_endpoint: 'https://graph.microsoft.com/oidc/userinfo',
      end_session_endpoint:
        'https://hlogin.extranet.grupoboticario.com.br/c719b145-55c9-4915-9400-2b79245ee83d/oauth2/v2.0/logout?p=b2c_1a_jit_signuporsignin_hml',
    },
  },
};
