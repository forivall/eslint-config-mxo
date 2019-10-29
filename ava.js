const path = require('path')

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  plugins: ['import'],
  rules: {
    'import/extensions': 'warn',
    'no-unused-vars': 'warn',
  },
}
