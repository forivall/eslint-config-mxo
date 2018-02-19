
var path = require('path')

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  plugins: ['import'],
  rules: {
    'semi': ['warn', 'never'],
    'semi-spacing': ['error', {before: false, after: true}],
    'import/extensions': 'warn',
    'max-lines': 'off',
    'no-unused-vars': 'warn',
  }
}
