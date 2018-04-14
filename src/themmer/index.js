const isObj = o => o !== null && typeof o === 'object'

const recurse = f => o =>
  Object.entries(o).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: isObj(value) ? recurse(f)(value) : f(value)
    }),
    {}
  )

const makeGetter = value => props => value

const themmer = theme => recurse(makeGetter)(theme)

module.exports = themmer
