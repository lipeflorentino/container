import url from 'url';
import { History } from 'history';

import { getAssetsManifest } from 'services/api/micro-frontend/assets-manifest';

import { ContainerContext } from './types';

let hostHash = '';
let currentHost = '';

const generateHash = (host: string): string => {
  let h = 0;
  const l = host.length;
  let i = 0;
  if (l > 0) while (i < l) h = ((h << 5) - h + host.charCodeAt(i++)) | 0;

  return h.toString();
};

export const getHostHash = (host: string): string => {
  if (currentHost === host) return hostHash;

  currentHost = host;
  hostHash = generateHash(host);

  return hostHash;
};

export const getScriptId = (host: string): string => {
  const hash = getHostHash(host);

  return `micro-frontend-script-${hash}`;
};

export const renderMicroFrontend = (
  mfeName: string,
  history: History,
  host: string,
  path: string,
  containerContext: ContainerContext,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const render = (window as any)[`render${mfeName}`];

  if (render) {
    const hash = getHostHash(host);
    render(hash, history, path, host, containerContext);
  }
};

export const getManifestAndRender = async (
  history: History,
  host: string,
  path: string,
  containerContext: ContainerContext,
) => {
  const { response, error } = await getAssetsManifest(host);

  if (error) {
    console.log('error', 'getAssetsManifest', error);
    return;
  }

  const manifest = response.data;

  if (!manifest) {
    console.log('error', 'empty manifest');
    return;
  }

  const mfeName = manifest.microfrontendname;

  if (!mfeName) {
    console.log('error', 'microfrontendname not found');
    return;
  }

  const mainJS = manifest['main.js'];

  if (!mainJS) {
    console.log('error', "App's mains.js file not found");
    return;
  }

  const script = document.createElement('script');
  script.dataset.microFrontendName = mfeName;
  script.id = getScriptId(host);
  script.crossOrigin = '';
  script.src = url.resolve(host, mainJS);
  script.onload = () =>
    renderMicroFrontend(mfeName, history, host, path, containerContext);
  document.head.appendChild(script);

  const mainCSS = manifest['main.css'];

  if (!mainCSS) {
    console.log('error', 'No CSS files available');
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url.resolve(host, mainCSS);
  document.head.appendChild(link);
};
