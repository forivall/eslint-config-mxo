'use strict';

var rules = JSON.parse(JSON.stringify(require('./index').rules));
rules['comma-dangle'] = ['error', 'only-multiline'];
rules['arrow-parens'] = ['error', 'always'];

module.exports = {
  extends: 'xo/esnext',
  rules: rules
};
