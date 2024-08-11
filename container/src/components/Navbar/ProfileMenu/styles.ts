import { styled } from '@grupoboticario/flora';

export const Wrapper = styled('div', {
  marginRight: '-$2',
});

export const Profile = styled('div', {
  padding: '32px 16px',
  display: 'flex',
});

export const Image = styled('div', {
  fontSize: 'l6',
  fontFamily: '$primary',

  width: '62px',
  minWidth: '62px',
  height: '62px',
  minHeight: '62px',
  borderRadius: '50%',
  background: '$light-dark-1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px',
});
