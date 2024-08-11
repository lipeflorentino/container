import React, { useEffect, useMemo } from 'react';
import { History } from 'history';
import { useSelector } from 'react-redux';

import { ApplicationState } from 'store/store.interface';

import { getToken } from 'services/utils/token';

import {
  getHostHash,
  getScriptId,
  renderMicroFrontend,
  getManifestAndRender,
} from './functions';
import { ContainerContext } from './types';

export interface MicroFrontendProps {
  history: History;
  host: string;
  path: string;
  containerContext?: ContainerContext;
}

const MicroFrontend = (props: MicroFrontendProps): JSX.Element => {
  const { history, host, path, containerContext } = props;

  useEffect(() => {
    if (!host || !containerContext) return;

    const scriptTag = document.getElementById(getScriptId(host));

    if (scriptTag) {
      const mfeName = scriptTag.dataset.microFrontendName || '';
      renderMicroFrontend(mfeName, history, host, path, containerContext);

      return;
    }

    getManifestAndRender(history, host, path, containerContext);
  }, [containerContext, history, host, path]);

  return (
    <main data-testid="micro-frontend" id={`${getHostHash(host)}`}>
      <p>LOADING</p>
    </main>
  );
};

const MicroFrontendWrapper = (props: MicroFrontendProps): JSX.Element => {
  const user = useSelector((state: ApplicationState) => state.profile);

  const containerContext = useMemo(
    () => ({
      user,
      token: getToken(),
      getToken,
    }),
    [user],
  );

  return <MicroFrontend {...props} containerContext={containerContext} />;
};

export default MicroFrontendWrapper;
