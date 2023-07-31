import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

// STYLES
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

// ROUTES
import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
