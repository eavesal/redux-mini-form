module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  globals: {
    document: false,
    window: false,
    setImmediate: false,
    setTimeout: false,
    process: false,
    module: false
  },
};