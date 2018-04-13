# Themmer

Easily access theme prop in styled-components

## Why

```javascript
// Quite ugly theme accessing
const UglyComponent = styled.div`
  background-color: ${props => props.theme.color.main.light};
  color: ${props => props.theme.color.main.dark};
`
```

## What

```javascript
// Less ugly theme accessing
const UglyComponent = styled.div`
  background-color: ${color`main.light`};
  color: ${color`main.dark`};
`
```

## How

### ../path/to/theme

```javascript
import styled from 'styled-components'
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
// Return an object with a getter for each key (one level  deep) in your theme
const themeAccesssor = themmer(theme)

module.exports = {
  theme,
  themeAccesssor
}
```

### ../path/to/LessUglyComponent

```javascript
import styled from 'styled-components'
import { themeAccesssor } from '../path/to/theme'
const { color } = themeAccesssor

// Less ugly theme accessing
const LessUglyComponent = styled.div`
  background-color: ${color`main.light`};
  color: ${color`main.dark`};
`
```
