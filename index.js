'use strict';

module.exports = {
  extends: 'xo',
  rules: {
    'indent': ['error', 2, {SwitchCase: 1}],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'curly': ['error', 'multi-line', 'consistent'],
    'eqeqeq': ['error', 'smart'],
    'func-names': 'off',
    'no-eq-null': 'off',
    'no-use-before-define': 'warn'
  }
};
