'use strict';

module.exports = {
  extends: 'xo-space/esnext',
  plugins: ['import'],
  rules: {
    'curly': [2, 'multi-line', 'consistent'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'eqeqeq': [2, 'smart'],
    'no-eq-null': [0],
    'no-use-before-define': [1],
    'comma-dangle': [2, 'only-multiline'],
    'babel/arrow-parens': [2, 'always'],
    'semi': [2, 'never'],
    'semi-spacing': [2, {before: false, after: true}],
    'import/extensions': [1]
  }
};
