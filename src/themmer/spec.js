const themmer = require('./index')
const theme = {
  color: {
    main: {
      dark: 'black'
    },
    secondary: {
      beautiful: {
        someColor: 'red'
      }
    }
  }
}

const { color } = themmer(theme)
const props = { theme }

test('when called against a props theme should return the corresponding value in the theme', () => {
  expect(color.secondary.beautiful.someColor(props)).toEqual('red')
  expect(color.main.dark(props)).toEqual('black')
})
test('should throw if called with a key not in the theme', () => {
  expect(() => color.secondary.beautiful.someColor.errror(props)).toThrowError()
  expect(() => color.wrongProp.beautiful.someColor(props)).toThrowError()
})
