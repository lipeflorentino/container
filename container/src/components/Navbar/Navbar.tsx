import React, { useState, useEffect, useCallback } from 'react';

import { Box, Flex } from '@grupoboticario/flora-react';

import { ComponentProps } from '@types';

import { getMenuItemsEndpoint, Menu } from 'services/api/extranet/menu';

import { Col, Container, Row } from 'components/Grid';

import boticarioLogo from 'assets/images/logo.svg';

import MenuButton from 'components/Navbar/MenuButton';

import NavbarItem from './NavbarItem';
import MenuList from './MenuList';
import ProfileMenu from './ProfileMenu';

import { data, generateTestId } from './data';

export type NavbarProps = ComponentProps;

const Navbar = ({ dataTestId }: NavbarProps): JSX.Element => {
  const testIds = generateTestId(dataTestId);

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [categories, setCategories] = useState<Menu[]>([]);

  const getMenu = useCallback(async () => {
    const request = getMenuItemsEndpoint();

    const { response, error } = await request();

    if (error) {
      console.log('error', 'getMenu', error);

      return;
    }
    setCategories(response.data.data);
  }, []);

  useEffect(() => {
    getMenu();
  }, [getMenu]);

  useEffect(() => {
    if (showMenu) {
      document.querySelector('html')?.classList.add('blockOverflow');
    } else {
      document.querySelector('html')?.classList.remove('blockOverflow');
    }

    return () => {
      document.querySelector('html')?.classList.remove('blockOverflow');
    };
  }, [showMenu]);

  return (
    <Box
      css={{
        height: '56px',
      }}
    >
      <Box
        css={{
          height: '56px',
        }}
      />

      <Flex
        align="center"
        data-testid={testIds.component}
        css={{
          position: 'fixed',
          width: '100%',
          top: '0',
          zIndex: '4',
          background: '$brand-1',
          '@tablet': {
            height: '56px',
          },
        }}
      >
        <Container fluid data-testid={testIds.container}>
          <Row wrap="noWrap">
            <Col col="4" mobile="2">
              <Flex
                align="center"
                css={{
                  height: '56px',
                  width: '100%',
                }}
              >
                <MenuButton
                  dataTestId={testIds.menuButton}
                  isActive={showMenu}
                  onClick={() => setShowMenu(prevState => !prevState)}
                />

                <Box
                  as="img"
                  src={boticarioLogo}
                  css={{
                    height: '16px',
                    width: '80px',
                    '@tablet': {
                      width: '120px',
                    },
                  }}
                />
              </Flex>
            </Col>

            <Col col="8" mobile="10">
              <Flex
                justify="between"
                css={{
                  width: '100%',
                  '@tablet': {
                    justifyContent: 'unset',
                  },
                }}
              >
                <Flex
                  align="center"
                  css={{
                    height: '56px',
                    width: '100%',
                  }}
                />

                <Flex
                  justify="between"
                  css={{
                    width: '100%',
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '50px',
                    background: '$light-light',
                    boxShadow: '0px -4px 4px rgba(0,0,0, 0.16)',
                    svg: {
                      width: '20px',
                      height: '20px',
                    },
                    '@tablet': {
                      position: 'unset',
                      height: 'unset',
                      background: 'unset',
                      justifyContent: 'unset',
                      boxShadow: 'unset',
                    },
                  }}
                >
                  <NavbarItem
                    label={data.navItems.bulletins.label}
                    route={data.navItems.bulletins.route}
                  />

                  <NavbarItem
                    label={data.navItems.microFrontend.label}
                    route={data.navItems.microFrontend.route}
                  />
                </Flex>

                <ProfileMenu dataTestId={testIds.navItem.profile} />
              </Flex>
            </Col>
          </Row>
        </Container>

        <MenuList
          dataTestId={testIds.menuList}
          isVisible={showMenu}
          categories={categories}
          onItemClick={() => setShowMenu(false)}
          onClose={() => setShowMenu(false)}
        />
      </Flex>

      {showMenu && (
        <>
          <Box
            data-testid={testIds.overlay}
            onClick={() => setShowMenu(false)}
            css={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              left: '0',
              top: '0',
              zIndex: '3',
              background: 'rgba(0, 0, 0, 0.2)',
            }}
          />
        </>
      )}
    </Box>
  );
};

export default Navbar;
