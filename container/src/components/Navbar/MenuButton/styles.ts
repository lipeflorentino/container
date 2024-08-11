import { styled } from '@grupoboticario/flora';

import { ReactComponent as MenuBulletsSVG } from 'assets/icons/menu-bullets.svg';

export const MenuButtonStyled = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '34px',
  minHeight: '34px',
  marginRight: '10px',
  border: 'none',
  borderRadius: '$pill',
  cursor: 'pointer',
  transition: 'background 150ms ease-in-out',
  outline: 'none',

  '&:hover': {
    background: '$brand-3',
  },

  variants: {
    isActive: {
      true: {
        background: '$brand-3',
      },
      false: {
        background: 'transparent',
      },
    },
  },
});

export const MenuBulletsIcon = styled(MenuBulletsSVG, {
  height: '18px',
  width: '18px',
});
