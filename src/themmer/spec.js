const themmer = require('./index')

const theme = {
  color: {
    main: 'red',
    secondary: 'black'
  },
  blob: {
    foo: {
      bar: 'yolo'
    }
  },
  padding: { small: '3px' }
}

const props = { theme }

const { color, padding, blob } = themmer(theme)

test('should return an object with a function for each key in the theme, this function when provided a prop will return the prop.theme[functitonName][functionArgument]', () => {
  expect(color`main`(props)).toEqual('red')
  expect(color`secondary`(props)).toEqual('black')
  expect(padding`small`(props)).toEqual('3px')
})

test('should support nested keys', () => {
  expect(blob`foo.bar`(props)).toEqual('yolo')
})
