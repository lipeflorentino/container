import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Text } from '@grupoboticario/flora-react';

import { ComponentProps } from '@types';

import { ApplicationState } from 'store/store.interface';
import { UserStore } from 'store/modules/stores/types';

import { getInitials } from 'services/utils/helpers';

import Tag from 'components/Tag';

import { ROUTE_PATH } from 'routes/paths';

import { ReactComponent as AvatarIcon } from 'assets/icons/avatar-couple.svg';

import NavbarDropdown from '../NavbarDropdown';
import DropdownItem from '../NavbarDropdown/DropdownItem';

import {
  generateTestId,
  associateStoreName,
  NUMBER_LIMIT_STORES,
  data,
} from './data';

import * as S from './styles';

export type ProfileMenuProps = ComponentProps;

const ProfileMenu = (props: ProfileMenuProps) => {
  const { dataTestId } = props;

  const testIds = generateTestId(dataTestId);

  const history = useHistory();

  const { profile } = useSelector((state: ApplicationState) => state);

  const profileStores: UserStore[] = useMemo(
    () => profile.stores || [],
    [profile.stores],
  );

  const storesLimited: UserStore[] = useMemo(
    () => profileStores.slice(0, NUMBER_LIMIT_STORES),
    [profileStores],
  );

  const storesOverLimit: number = useMemo(
    () => profileStores.length - NUMBER_LIMIT_STORES,
    [profileStores],
  );

  const storesGreaterThanLimit = profileStores.length > NUMBER_LIMIT_STORES;

  const logout = () => {
    history.push(ROUTE_PATH.LOGOUT);
  };

  return (
    <>
      <S.Wrapper>
        <NavbarDropdown
          dataTestId={testIds.component}
          label={profile.name.toLowerCase()}
          icon={AvatarIcon}
          showIconOnDesktop
          items={[
            <S.Profile>
              <S.Image data-testid={testIds.userInitials}>
                {getInitials(profile.name)}
              </S.Image>
              <div>
                <Text
                  as="p"
                  data-testid={testIds.userName}
                  size="bodyLargeShort"
                  color="$dark-dark"
                  css={{
                    marginBottom: '$2',
                    textTransform: 'capitalize',
                  }}
                >
                  {profile.name.toLowerCase()}
                </Text>
                <Text
                  as="p"
                  data-testid={testIds.userRole}
                  size="auxiliarSmall"
                  css={{
                    marginBottom: '$2',
                  }}
                >
                  {profile.role}
                </Text>
                <div data-testid={testIds.userStores}>
                  {storesLimited.map(store => (
                    <Tag
                      key={`${store.name} - ${store.code}`}
                      css={{
                        margin: '0 $1 $1 0',
                      }}
                    >
                      {`${associateStoreName[store.channel]} ${store.code}`}
                    </Tag>
                  ))}

                  {storesGreaterThanLimit && (
                    <Text size="auxiliarMini">{`+${storesOverLimit}`}</Text>
                  )}
                </div>
              </div>
            </S.Profile>,

            <DropdownItem
              onClick={logout}
              dataTestId={testIds.logout}
              label={data.logout.label}
              variant="danger"
            />,
          ]}
        />
      </S.Wrapper>
    </>
  );
};

export default ProfileMenu;
