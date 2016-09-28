'use strict';

module.exports = {
  extends: 'xo-space',
  rules: {
    'arrow-parens': [2, 'always'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'curly': [2, 'multi-line', 'consistent'],
    'eqeqeq': [2, 'smart'],
    'no-eq-null': [0],
    'no-use-before-define': [1]
  }
};
