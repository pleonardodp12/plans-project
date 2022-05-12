import { Providers } from './providers/Providers';
import { AppRoute } from './routes/router';

import GlobalStyle from './theme/global';

function App() {
  return (
    <Providers>
      <AppRoute />
      <GlobalStyle />
    </Providers>
  );
}

export default App;
