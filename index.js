module.exports = {
  plugins: ['promise'],
  rules: {
    'curly': ['error', 'multi-line', 'consistent'],
    'eqeqeq': ['error', 'smart'],
    'func-names': 'off',
    'no-eq-null': 'off',
    'no-use-before-define': 'warn',
    'quote-props': ['error', 'consistent-as-needed'],
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': ['error', {allowReject: true}],
  },
}
