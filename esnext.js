'use strict';

var base = require('./index');
var rules = JSON.parse(JSON.stringify(base.rules));
rules['comma-dangle'] = ['error', 'only-multiline'];
rules['arrow-parens'] = ['error', 'always'];

module.exports = {
  extends: 'xo/esnext',
  plugins: base.plugins,
  rules: rules
};
