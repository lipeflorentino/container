import { styled } from '@grupoboticario/flora';

export const Wrapper = styled('a', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '$2',
  padding: '$2',
  textDecoration: 'none',
  background: 'transparent',
  borderRadius: '$small',
  transition: 'background 200ms ease-in-out',
  textTransform: 'capitalize',
  color: '$medium-light-1',

  fontSize: '$auxiliarSmall',
  fontFamily: '$secondary',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgba(101, 152, 124, 0.2)',
  },

  '&:not(:last-child)': {
    marginBottom: '0',
  },
});

export const IconContainer = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    path: {
      fill: '$actionNavigationStandardStatic',
    },
  },
});
