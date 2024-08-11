import React from 'react';
import menuBullets from 'assets/icons/menu-bullets.svg';
import { MenuButtonStyled } from './styles';

export interface MenuButtonProps {
  dataTestId: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuButton = (props: MenuButtonProps): JSX.Element => {
  const { dataTestId, isActive, onClick } = props;

  return (
    <MenuButtonStyled
      data-testid={dataTestId}
      type="button"
      isActive={isActive}
      onClick={onClick}
    >
      <img src={menuBullets} alt="Ícone de Menu" />
    </MenuButtonStyled>
  );
};

export default MenuButton;
