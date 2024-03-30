const path = require('path');

module.exports = {
  root: true,
  extends: ['@arcblock/eslint-config-ts/base'],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.eslint.json'),
  },
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/comma-dangle': 'off',
  },
};
