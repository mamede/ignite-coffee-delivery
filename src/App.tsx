import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import { Header } from './components/Header/Header'

// STYLES
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

// ROUTES
import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
