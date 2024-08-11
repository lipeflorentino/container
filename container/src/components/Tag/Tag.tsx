import { styled } from '@grupoboticario/flora';
import { Box } from '@grupoboticario/flora-react';

const Tag = styled(Box, {
  display: 'inline-block',
  border: '1px solid transparent',
  borderRadius: '$small',
  padding: '0 $1',
  color: '$medium-medium',
  borderColor: '$medium-medium',
  fontFamily: '$primary',
  fontSize: '$auxiliarMini',
  lineHeight: '16px',
});

export default Tag;
