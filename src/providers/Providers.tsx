import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { CheckoutProvider } from '../context/checkoutContext';
import { theme } from '../theme';

interface Props {
  children: ReactNode;
}

export function Providers(props: Props) {
  const { children } = props;

  return (
    <CheckoutProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CheckoutProvider>
  );
}
