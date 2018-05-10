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
import tm from 'themmer'
// Less ugly theme accessing
const LessUglyComponent = styled.div`
  background-color: ${tm`color.main.light`};
  color: ${tm`color.main.dark`};
`
```
