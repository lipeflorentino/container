export const generateTestId = (dataTestId: string) => ({
  component: dataTestId,
  container: `${dataTestId}-container`,
  menuButton: `${dataTestId}-menu-button`,
  navItem: {
    bulletins: `${dataTestId}-bulletins-nav-item`,
    microFrontend: `${dataTestId}-mf-nav-item`,
    profile: `${dataTestId}-profile-nav-item`,
  },
  menuList: `${dataTestId}-menu-list`,
  overlay: `${dataTestId}-menu-overlay`,
  onboarding: `${dataTestId}-onboarding-modal`,
});

export const data = {
  navItems: {
    bulletins: {
      label: 'Comunicados',
      route: '/comunicados',
    },
    microFrontend: {
      label: 'Micro frontend',
      route: '/mf/micro-frontend',
    },
  },
};
