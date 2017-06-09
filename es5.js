'use strict';
var path = require('path');

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      jsx: false,
      experimentalObjectRestSpread: false
    }
  },
  plugins: [
    'es5'
  ],
  rules: {
    'es5/no-arrow-functions': 'error',
    'es5/no-block-scoping': 'error',
    'es5/no-classes': 'error',
    'es5/no-computed-properties': 'error',
    'es5/no-default-parameters': 'error',
    'es5/no-destructuring': 'error',
    'es5/no-for-of': 'error',
    'es5/no-generators': 'error',
    'es5/no-modules': 'error',
    'es5/no-object-super': 'error',
    'es5/no-shorthand-properties': 'error',
    'es5/no-spread': 'error',
    'es5/no-template-literals': 'error',
    'es5/no-typeof-symbol': 'error',
    'es5/no-unicode-regex': 'error',
    'es5/no-exponentiation-operator': 'error'
  }
};
