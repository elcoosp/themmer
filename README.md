# Themmer

Easily access theme prop in styled-components

## Install

`npm i -S themmer`

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
const LessUglyComponent = styled.div`
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
// return an object with a getter
// for each key in your theme (one level  deep)
const themeAccessor = themmer(theme)

export default {
  theme,
  themeAccessor
}
```

### ../path/to/LessUglyComponent

```javascript
import styled from 'styled-components'
import { themeAccessor } from '../path/to/theme'

const { color } = themeAccessor

// Less ugly theme accessing
const LessUglyComponent = styled.div`
  background-color: ${color`main.light`};
  color: ${color`main.dark`};
`
```
