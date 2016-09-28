'use strict';

var rules = JSON.parse(JSON.stringify(require('./index').rules));
rules['comma-dangle'] = [2, 'only-multiline'];
rules['babel/arrow-parens'] = [2, 'always'];

module.exports = {
  extends: 'xo-space/esnext',
  rules: rules
};
