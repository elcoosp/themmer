# Themmer

## Usage

```javascript
import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { themmer } from 'themmer'


const theme = {
  color: {
    main: {
      light: 'red',
      dark: 'dark-red'
    }
  }
}

// Export with your theme
const themeAccesssor = themmer(theme)

// In a component file
const { color } = themeAccesssor

const UglyComponent = styled.div`
  background-color: ${color`main.light`};
  ${ /* 'red' */}
  color: ${color`main.dark`};
  ${ /* 'dark-red' */}
`

const App = () => (
  <ThemeProvider theme={theme}>
    <UglyComponent>Plop</UglyComponent>
  </ThemeProvider>
)
render(<App />, document.querySelector('#app'))
```
