'use strict'

const themmer = strTemplate => props => {
  const result = strTemplate[0] // Path in dot notation, eg : 'some.thing'
    .split('.')
    .reduce((acc, key) => acc[key], props.theme)

  if (!result)
    throw new Error(
      `Could not access ${pathDotNotation} on props.theme, it is undefined`
    )
  else return result
}

module.exports = themmer
