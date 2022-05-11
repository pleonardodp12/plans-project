import { ThemeProvider } from 'styled-components'
import { Home } from './pages'

import { theme } from './theme'
import GlobalStyle from './theme/global'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
