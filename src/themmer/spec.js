const themmer = require('./index')
test('should return an object with a function for each key in the theme object, this function when provided a prop will look at the prop.theme[functitonNama][functionArgument]', () => {
  const theme = {
    color: {
      main: 'red',
      secondary: 'black'
    },
    padding: { small: '3px' }
  }

  const { color, padding } = themmer(theme)
  const props = { theme }
  expect(color`main`(props)).toEqual('red')
  expect(color`secondary`(props)).toEqual('black')
  expect(padding`small`(props)).toEqual('3px')
})
