const path = require('path')

module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-xo/esnext'),
    path.join(__dirname, '../ava.js'),
    require.resolve('eslint-config-prettier'),
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
}
