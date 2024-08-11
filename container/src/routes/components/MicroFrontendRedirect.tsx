import { useEffect } from 'react';
import { useHistory } from 'react-router';

import { ROUTE_PATH } from 'routes/paths';

interface MFLocationState {
  path?: string;
}
const MicroFrontendRedirect = () => {
  const history = useHistory<MFLocationState>();

  useEffect(() => {
    if (!history.location.state.path) {
      history.replace(ROUTE_PATH.ROOT);
      return;
    }

    history.replace(`/mf${history.location.state.path}`);
  }, [history]);

  return <p>LOADING</p>;
};

export default MicroFrontendRedirect;
