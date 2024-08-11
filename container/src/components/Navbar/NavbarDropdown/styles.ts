import { styled } from '@grupoboticario/flora';

import { ReactComponent as ArrowDownSVG } from 'assets/icons/arrow-down.svg';

export const NavItem = styled('div', {
  textDecoration: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '56px',
  position: 'relative',

  variants: {
    isOpen: {
      true: {
        '&:after': {
          content: '',
          display: 'flex',
          border: '12px solid $light-light',
          position: 'absolute',
          bottom: '-1px',
          zIndex: '2',
          right: '0',
          left: '0',
          margin: 'auto',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderTopColor: 'transparent',
          width: '0',

          '@tablet': {
            right: '$1',
            left: 'unset',
            margin: 'unset',
          },
        },
      },
    },
  },
});

export const Label = styled('p', {
  whiteSpace: 'nowrap',
  textTransform: 'capitalize',
  maxWidth: '150px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  width: '100%',
  display: 'none',

  fontFamily: '$secondary',
  fontSize: '$auxiliarMini',
  color: '$actionNavigationStandardStatic',

  '@tablet': {
    fontSize: '$bodyMedium',
    color: '$actionNavigationAltStatic',
    marginRight: '$1',
    display: 'flex',
  },
});

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 8px',
  height: '100%',

  '@tablet': {
    position: 'relative',
  },
});

export const MenuWrapper = styled('div', {
  position: 'absolute',
  top: '100%',
  width: '100%',
  background: '$light-light',
  zIndex: '1',
  boxShadow: '0px 4px 16px 0px rgba(0,0,0,0.32)',
  borderBottomLeftRadius: '$small',
  borderBottomRightRadius: '$small',
  minWidth: '276px',
  display: 'flex',
  flexDirection: 'column',
  right: '0',
  left: '0',

  '@mobile': {
    right: 'unset',
    left: 'unset',
  },

  '@tablet': {
    right: '-$2',
  },
});

export const IconContent = styled('div', {
  variants: {
    showIconOnDesktop: {
      true: {
        '@tablet': {
          display: 'block',
        },
      },
    },
  },

  '@tablet': {
    display: 'none',
    marginRight: '4px',
  },
});

export const LabelContent = styled('div', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const NavItemName = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const ArrowDownIcon = styled(ArrowDownSVG, {
  display: 'none',

  '@tablet': {
    display: 'block',
    minWidth: '16px',
    minHeight: '16px',
  },
});

export const Item = styled('div', {
  width: '100%',
  borderBottom: '1px solid $light-dark-1',
});
