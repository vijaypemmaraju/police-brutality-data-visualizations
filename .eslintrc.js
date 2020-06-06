module.exports = {
  "parser": '@typescript-eslint/parser',
  "extends": [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  "plugins": [
    '@typescript-eslint'
  ],
  "rules": {
    'react/jsx-filename-extension': 'off',
    'camelcase': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  }
};
