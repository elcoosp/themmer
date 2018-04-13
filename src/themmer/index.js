const findPath = s => o => s.split('.').reduce((a, k) => a[k], o)

const createGetter = (acc, key) => ({
  ...acc,
  [key]: ([path]) => props => findPath(path)(props.theme[key])
})

const themmer = theme => Object.keys(theme).reduce(createGetter, {})

module.exports = themmer
