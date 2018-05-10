const path = obj => (...arrOfKeys) =>
  arrOfKeys.reduce((acc, key) => acc[key], obj)
const tm = ([pathDotNotation]) => props => {
  const result = path(props.theme)(...pathDotNotation.split('.'))
  if (!result)
    throw new Error(
      `Could not access ${pathDotNotation} on props.theme, it is undefined`
    )
  else return result
}

module.exports = tm
