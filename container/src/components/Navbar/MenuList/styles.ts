import { styled } from '@grupoboticario/flora';

export const ListWrapper = styled('div', {
  position: 'absolute',
  top: '100%',
  zIndex: '2',
  width: '100%',
  maxWidth: '346px',
  height: 'calc(100vh - 56px)',
  padding: '$4 24px',
  overflowY: 'auto',
  background: '$light-light',
  borderRight: '1px solid $light-dark-1',
  boxShadow: '0 5px 20px rgba(135, 135, 135, 0.7)',
  transition: 'all 200ms ease-in-out',

  variants: {
    isVisible: {
      true: {
        transform: 'translateX(0)',
      },
      false: {
        transform: 'translateX(-346px)',
      },
    },
  },
});

export const CategoryBlockWrapper = styled('div', {
  marginBottom: '24px',
});

export const CategoryBlockList = styled('ul', {
  margin: '0',
  padding: '0',
  listStyle: 'none',
});
