const tm = require('./index')
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

const props = { theme }

test('when called against a props theme should return the corresponding value in the theme', () => {
  expect(tm`color.secondary.beautiful.someColor`(props)).toEqual('red')
  expect(tm`color.main.dark`(props)).toEqual('black')
})

test('should throw if called with a key not in the theme', () => {
  expect(() => tm`secondary.beautiful.someColor.errror`(props)).toThrow()
  expect(() => tm`color.wrongProp.beautiful.someColor`(props)).toThrow()
})

test('should throw an error if the value is undefined', () => {
  expect(() => tm`color.wrongProp`(props)).toThrowError(
    `Could not access color.wrongProp on props.theme, it is undefined`
  )
})
