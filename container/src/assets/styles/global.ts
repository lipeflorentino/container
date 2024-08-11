import { global } from '@grupoboticario/flora-react';

import DomaineSansTextBoldWoff from 'assets/fonts/DomaineSansDisplay-BoldItalic.woff2';
import DomaineSansTextBoldOtf from 'assets/fonts/DomaineSansDisplay-BoldItalic.otf';

const globalStyles = global({
  '@font-face': {
    fontWeight: 'bold',
    fontFamily: 'DomaineSansText',
    fontDisplay: 'swap',
    fontStyle: 'normal',
    src: `url(${DomaineSansTextBoldWoff}) format('woff2'),
          url(${DomaineSansTextBoldOtf}) format('opentype')`,
  },

  '*, *::before, *::after': {
    boxSizing: 'border-box',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section':
    {
      display: 'block',
    },
  '*[hidden]': {
    display: 'none',
  },
  a: {
    textDecoration: 'none',
  },
  body: {
    lineHeight: '1',
    color: '$medium-light-1',
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: '500',
    minHeight: '100vh',
    scrollBehavior: 'smooth',
    textRendering: 'optimizeSpeed',
  },
  'ol, ul, li': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
  },
  table: {
    borderSpacing: '0',
  },
  fieldset: {
    border: 0,
    margin: 0,
    padding: 0,
  },
  button: {
    cursor: 'pointer',
  },
  '#root': {
    'min-height': '100vh',
  },
  '#onetrust-banner-sdk .ot-sdk-container': {
    display: 'flex !important',
  },
  '#onetrust-accept-btn-handler': {
    'min-width': 'unset !important',
  },
  '.blockOverflow': {
    overflowY: 'hidden',
  },
});

export default globalStyles;
