'use strict';
var path = require('path');

module.exports = {
  extends: path.join(__dirname, 'esnext.js'),
  plugins: ['import'],
  rules: {
    'semi': [1, 'never'],
    'semi-spacing': [2, {before: false, after: true}],
    'import/extensions': [1],
    'max-lines': [0],
    'no-unused-vars': [1]
  }
};
