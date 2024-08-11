import { styled } from '@grupoboticario/flora';

import { Flex } from '@grupoboticario/flora-react';

export const Container = styled('div', {
  width: '100%',
  margin: 'auto',
  position: 'relative',
  paddingLeft: '24px',
  paddingRight: '24px',
  maxWidth: '540px',

  '@mobile': {
    maxWidth: '540px',
  },

  '@tablet': {
    maxWidth: '720px',
  },

  '@desktop': {
    maxWidth: '960px',
  },

  '@fullscreen': {
    maxWidth: '1140px',
  },

  variants: {
    fluid: {
      true: {
        maxWidth: '100%',
      },
    },
  },
});

export const Row = styled(Flex, {
  width: 'auto',
  marginLeft: '-24px',
  marginRight: '-24px',
});

export const Col = styled(Flex, {
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',

  variants: {
    ...['col', 'mobile', 'tablet', 'desktop', 'fullscreen'].reduce(
      (acc, screen) => {
        return {
          ...acc,
          [`${screen}`]: {
            ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce(
              (accumulator, current) => {
                const width =
                  screen === 'col'
                    ? {
                        maxWidth: `${(100 / 12) * current}%`,
                      }
                    : {
                        [`@${screen}`]: {
                          maxWidth: `${(100 / 12) * current}%`,
                        },
                      };

                return {
                  ...accumulator,
                  [`${current}`]: width,
                };
              },
              {},
            ),
          },
        };
      },
      {
        col: {
          '1': {},
          '2': {},
          '3': {},
          '4': {},
          '5': {},
          '6': {},
          '7': {},
          '8': {},
          '9': {},
          '10': {},
          '11': {},
          '12': {},
        },
        mobile: {
          '1': {},
          '2': {},
          '3': {},
          '4': {},
          '5': {},
          '6': {},
          '7': {},
          '8': {},
          '9': {},
          '10': {},
          '11': {},
          '12': {},
        },
        tablet: {
          '1': {},
          '2': {},
          '3': {},
          '4': {},
          '5': {},
          '6': {},
          '7': {},
          '8': {},
          '9': {},
          '10': {},
          '11': {},
          '12': {},
        },
        desktop: {
          '1': {},
          '2': {},
          '3': {},
          '4': {},
          '5': {},
          '6': {},
          '7': {},
          '8': {},
          '9': {},
          '10': {},
          '11': {},
          '12': {},
        },
        fullscreen: {
          '1': {},
          '2': {},
          '3': {},
          '4': {},
          '5': {},
          '6': {},
          '7': {},
          '8': {},
          '9': {},
          '10': {},
          '11': {},
          '12': {},
        },
      },
    ),
  },
});
