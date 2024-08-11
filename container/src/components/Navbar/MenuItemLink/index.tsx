import { useHistory } from 'react-router';

import { MenuItem } from 'services/api/extranet/menu';

import { ReactComponent as ArrowRightSVG } from 'assets/icons/arrow-right.svg';

import * as S from './styles';

export interface MenuItemLinkProps {
  dataTestId: string;
  categoryName: string;
  item: MenuItem;
  onClick: () => void;
  onClose?: () => void;
}

const MenuItemLink = (
  props: React.PropsWithChildren<MenuItemLinkProps>,
): JSX.Element => {
  const { dataTestId, children, item, onClick } = props;

  const history = useHistory();

  const handleClick = () => {
    if (item.isMicroFrontend) {
      history.push({
        pathname: '/mf',
        state: { path: item.link },
      });
    }

    onClick();
  };

  return (
    <>
      {item.isMicroFrontend || item.isExternalSystem ? (
        <S.Wrapper data-testid={dataTestId} onClick={handleClick}>
          <S.IconContainer>
            <ArrowRightSVG />
          </S.IconContainer>
          {children}
        </S.Wrapper>
      ) : (
        <S.Wrapper
          href={item.link}
          data-testid={dataTestId}
          rel="noreferrer noopener"
          target="_blank"
          onClick={handleClick}
        >
          <S.IconContainer>
            <ArrowRightSVG />
          </S.IconContainer>

          {children}
        </S.Wrapper>
      )}
    </>
  );
};

export default MenuItemLink;
