module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      { multiline: { delimiter: 'none' } },
    ],
    '@typescript-eslint/camelcase': ['warn', { properties: 'never' }],
  },
}
