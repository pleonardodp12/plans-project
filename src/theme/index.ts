import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#0F9AFE',
    white: '#FFFFFF',
    white200: '#EFF8FF',
    gray: '#6E7275',
    gray200: '#293145',
    grayLight: '#DBDBDB',
  },
};

// declare module 'styled-components' {
//   type TTheme = typeof theme;

//   export type DefaultTheme = TTheme;
// }
