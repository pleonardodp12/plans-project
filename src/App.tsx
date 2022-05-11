import { ThemeProvider } from 'styled-components';
import { AppRoute } from './routes/router';

import { theme } from './theme';
import GlobalStyle from './theme/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoute />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
