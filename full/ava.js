const path = require('path');

module.exports = {
  extends: [
    require.resolve('eslint-config-xo'),
    path.join(__dirname, '../ava.js'),
    require.resolve('eslint-config-prettier'),
  ],
}
