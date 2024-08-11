import React, { useCallback, useEffect } from 'react';
import { Text } from '@grupoboticario/flora-react';
import { MenuItem, Menu } from 'services/api/extranet/menu';

import MenuItemLink from '../MenuItemLink';

import { ListWrapper, CategoryBlockWrapper, CategoryBlockList } from './styles';

import { generateTestId } from './data';

interface MenuCategoryBlockProps {
  dataTestId: string;
  category: Menu;
  onItemClick: () => void;
}

const MenuCategoryBlock = (props: MenuCategoryBlockProps): JSX.Element => {
  const { dataTestId, category, onItemClick } = props;
  const testIds = generateTestId(dataTestId);

  return (
    <CategoryBlockWrapper data-testid={testIds.component}>
      <Text
        as="p"
        size="overline"
        color="$dark-dark"
        css={{
          margin: '0 0 8px',
        }}
      >
        {category.name}
      </Text>

      <CategoryBlockList>
        {category.items.map((item: MenuItem) => (
          <MenuItemLink
            dataTestId={testIds.menuItemLink(item.id)}
            categoryName={category.name}
            item={item}
            onClick={onItemClick}
            key={item.id}
          >
            {item.name.toLowerCase()}
          </MenuItemLink>
        ))}
      </CategoryBlockList>
    </CategoryBlockWrapper>
  );
};

export interface MenuListProps {
  dataTestId: string;
  isVisible: boolean;
  categories: Menu[];
  onItemClick: () => void;
  onClose: () => void;
}

const MenuList = (props: MenuListProps): JSX.Element => {
  const { dataTestId, isVisible, categories, onItemClick, onClose } = props;
  const testIds = generateTestId(dataTestId);

  const closeModalIfEscIsPressed = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Esc') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', closeModalIfEscIsPressed);

      return () => {
        document.removeEventListener('keydown', closeModalIfEscIsPressed);
      };
    }
  }, [closeModalIfEscIsPressed, isVisible]);

  return (
    <ListWrapper data-testid={testIds.component} isVisible={isVisible}>
      {categories.map((category: Menu) => (
        <MenuCategoryBlock
          dataTestId={testIds.categoryBlock(category.id)}
          category={category}
          onItemClick={onItemClick}
          key={category.id}
        />
      ))}
    </ListWrapper>
  );
};

export default MenuList;
