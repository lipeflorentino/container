export const generateTestId = (dataTestId: string) => ({
  component: dataTestId,
  configSements: `${dataTestId}-config-segments`,
  impersonate: `${dataTestId}-impersonate`,
  termOfUse: `${dataTestId}-terms-of-use`,
  logout: `${dataTestId}-logout`,
  selectBrand: `${dataTestId}-select-brand`,
  selectBrandModal: `${dataTestId}-select-brand-modal`,
  userName: `${dataTestId}-user-name`,
  userRole: `${dataTestId}-user-role`,
  userInitials: `${dataTestId}-user-initials-icon`,
  userStores: `${dataTestId}-user-stores`,
});

export const data = {
  configSegments: {
    label: 'Configurar segmentação',
    description: 'Defina o conteúdo que deseja receber',
  },
  impersionate: {
    label: 'Impersonate',
  },
  selectBrand: {
    label: 'Selecionar marca',
  },
  termsOfUse: {
    label: 'Termos de uso',
  },
  logout: {
    label: 'Sair',
  },
};

export const associateStoreName = {
  BO: 'BO',
  VD: 'VD',
  Loja: 'LJ',
} as {
  [key: string]: string;
};

export const NUMBER_LIMIT_STORES = 8;
