import { styled } from '@grupoboticario/flora';

export const Wrapper = styled('button', {
  padding: '$3',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  width: '100%',
  textAlign: 'left',

  '&:not(:last-child)': {
    borderBottom: '1px solid $light-dark-1',
  },

  '&:last-child': {
    borderBottomLeftRadius: '$small',
    borderBottomRightRadius: '$small',
  },

  '&:hover': {
    background: '$light-dark-1',
  },

  variants: {
    variant: {
      danger: {
        '> p:first-child': {
          color: '$error-standard',
        },
      },
      regular: {},
    },
  },
});
