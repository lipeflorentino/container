import { NavLink } from 'react-router-dom';

import { styled } from '@grupoboticario/flora-react';

export const NavLinkStyled = styled(NavLink, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 24px',
  textDecoration: 'none',
  flexDirection: 'column',
  width: '100%',
  cursor: 'pointer',

  '&.isActive': {
    backgroundColor: '$light-dark-1',
  },

  'svg path': {
    fill: '$actionNavigationStandardStatic',
  },

  '@tablet': {
    flexDirection: 'row',

    '&.isActive': {
      backgroundColor: '$brand-3',
    },

    '&:hover': {
      background: '$brand-3',
    },

    'svg path': {
      fill: '$light-light',
    },
  },
});

export const Icon = styled('img', {
  height: '20px',
  width: '20px',
});

export const Label = styled('p', {
  fontSize: '$auxiliarMini',
  fontFamily: '$secondary',
  color: '$brand-3',

  '@tablet': {
    fontSize: '$bodyMedium',
    marginLeft: '10px',
    color: '$light-light',
  },
});
