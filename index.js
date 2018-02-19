
module.exports = {
  extends: 'xo',
  plugins: [
    'promise'
  ],
  rules: {
    'indent': ['error', 2, {
      MemberExpression: 0,
      SwitchCase: 1,
    }],
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    'curly': ['error', 'multi-line', 'consistent'],
    'comma-dangle': ['error', 'only-multiline'],
    'eqeqeq': ['error', 'smart'],
    'func-names': 'off',
    'no-eq-null': 'off',
    'no-use-before-define': 'warn',
    'quote-props': ['error', 'consistent-as-needed'],
    'semi-style': 'off',
    'promise/no-native': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
  }
}
