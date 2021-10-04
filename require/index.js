const r = require.context('../output/', true, /\.js$/)

// The name should be like '../Prelude/index.js', so we shoud slice the first char
module.exports = name => r(name.slice(1))