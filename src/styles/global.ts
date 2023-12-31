import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    height: 100vh;
    padding: 0 10rem;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  
  input {
    outline: none;
  }
`
