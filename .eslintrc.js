module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    document: false,
    window: false,
    setImmediate: false,
    setTimeout: false
  },
  rules: {
    'semi': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'object-curly-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js']}],
    'react/jsx-handler-names': 2,
    'react/forbid-prop-types': 0,
    'max-len': ['error', {'code': 120}]
  }
};