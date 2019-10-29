const path = require('path');

module.exports = {
  extends: [
    require.resolve('eslint-config-xo'),
    path.join(__dirname, '../index.js'),
    require.resolve('eslint-config-prettier'),
  ],
}
