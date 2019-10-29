const path = require('path')

module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-xo'),
    path.join(__dirname, '../index.js'),
    require.resolve('eslint-config-prettier'),
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
}
