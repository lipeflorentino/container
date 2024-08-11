import { ComponentProps } from '@types';

import { Text } from '@grupoboticario/flora-react';

import { generateTestId } from './data';
import * as S from './styles';

export interface DropdownItemProps extends ComponentProps {
  onClick: () => void;
  variant?: 'regular' | 'danger';
  label: string;
  description?: string;
}

const DropdownItem = (props: DropdownItemProps) => {
  const {
    dataTestId,
    onClick,
    label,
    description,
    variant = 'regular',
  } = props;

  const testIds = generateTestId(dataTestId);

  return (
    <S.Wrapper
      data-testid={testIds.component}
      onClick={onClick}
      variant={variant}
    >
      <Text as="p" size="bodyMediumStandard">
        {label}
      </Text>

      {!!description && (
        <Text as="p" size="auxiliarSmall" color="$medium-medium">
          {description}
        </Text>
      )}
    </S.Wrapper>
  );
};

export default DropdownItem;
