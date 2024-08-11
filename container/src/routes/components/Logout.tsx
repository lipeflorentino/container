import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { signReset } from 'store/modules/auth/actions';

import openId from 'services/openId';

import { profileReset } from 'store/modules/profile/actions';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    openId.initializeOpenId().then(() => {
      dispatch(signReset());
      dispatch(profileReset());

      openId.logout();
    });
  }, [dispatch]);

  return <p>LOADING</p>;
};

export default Logout;
