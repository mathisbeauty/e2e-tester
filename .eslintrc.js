module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'tslint-config-prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'always']
  }
};
