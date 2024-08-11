import React from 'react';
import { NavLinkStyled, Label } from './styles';
import { generateTestId } from './data';

export interface NavbarItemProps {
  dataTestId?: string;
  label: string;
  counter?: number;
  route: string;
}

const NavbarItem = (props: NavbarItemProps): JSX.Element => {
  const { dataTestId = '', label, route } = props;

  const testIds = generateTestId(dataTestId);

  return (
    <NavLinkStyled
      data-testid={testIds.component}
      to={route}
      activeClassName="isActive"
    >
      <Label>{label}</Label>
    </NavLinkStyled>
  );
};

NavbarItem.defaultProps = {
  icon: null,
  counter: null,
};

export default NavbarItem;
