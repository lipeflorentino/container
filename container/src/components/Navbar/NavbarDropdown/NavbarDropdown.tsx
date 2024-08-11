import React, { ForwardedRef, useState } from 'react';

import { ComponentProps } from '@types';

import withCloseEvents from 'components/withCloseEvents';

import * as S from './styles';
import { generateTestId } from './data';

interface MenuProps extends ComponentProps {
  items: JSX.Element[];
  closeAction: () => void;
}

const Menu = React.forwardRef(
  (props: MenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { dataTestId, items, closeAction } = props;

    return (
      <S.MenuWrapper data-testid={dataTestId} ref={ref}>
        {items.map((item: JSX.Element, index: number) => (
          <S.Item onClick={closeAction} key={index}>
            {item}
          </S.Item>
        ))}
      </S.MenuWrapper>
    );
  },
);

const MenuDropdown = withCloseEvents<MenuProps>(Menu);

export interface NavbarDropdownProps extends ComponentProps {
  label?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  showIconOnDesktop?: boolean;
  items: JSX.Element[];
}

const NavbarDropdown = (props: NavbarDropdownProps): JSX.Element => {
  const { dataTestId, label, icon: Icon, showIconOnDesktop, items } = props;

  const [isOpen, setIsOpen] = useState(false);

  const testIds = generateTestId(dataTestId);

  return (
    <S.Wrapper data-testid={testIds.component}>
      <S.NavItem
        data-testid={testIds.button}
        onClick={() => setIsOpen(true)}
        isOpen={isOpen}
      >
        <S.LabelContent>
          <S.NavItemName>
            <S.Label>{label}</S.Label>

            <S.IconContent showIconOnDesktop={showIconOnDesktop}>
              <Icon />
            </S.IconContent>
          </S.NavItemName>

          <S.ArrowDownIcon />
        </S.LabelContent>
      </S.NavItem>

      <MenuDropdown
        closeAction={() => setIsOpen(false)}
        isOpen={isOpen}
        dataTestId={testIds.menu}
        items={items}
      />
    </S.Wrapper>
  );
};

export default NavbarDropdown;
