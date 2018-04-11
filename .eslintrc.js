module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 0,
    'no-unused-vars': [0],
    'no-console': [0]
  }
}
