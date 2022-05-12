import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      white200: string;
      gray: string;
      gray200: string;
      grayLight: string;
    };
  }
}
