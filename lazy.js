
var path = require('path')

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  rules: {
    'semi': ['warn', 'never'],
    'semi-spacing': ['error', {before: false, after: true}],
    'semi-style': ['error', 'first'],
  }
}
