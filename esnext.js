'use strict';

module.exports = {
  extends: 'xo-space/esnext',
  rules: {
    'curly': [2, 'multi-line', 'consistent'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'eqeqeq': [2, 'smart'],
    'no-eq-null': [0],
    'no-use-before-define': [1],
    'comma-dangle': [2, 'only-multiline'],
    'babel/arrow-parens': [2, 'always']
  }
}