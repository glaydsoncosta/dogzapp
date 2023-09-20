module.exports = {
  root: true,
  extends: '@react-native'
};
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier/react'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] } },
    'import/no-extraneous-dependencies': ['error', { devDependencies: false, optionalDependencies: false, peerDependencies: false }]
  },
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 2018 },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'global-require': 0,
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    // 'object-curly-newline': ['error', { multiline: true }],
    'object-curly-newline': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    // 'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-use-before-define': 'off',
    'brace-style': 'off',
    'max-len': ['error', { code: 255, ignoreComments: true }],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never'
      }
    ],
    'react/jsx-props-no-spreading': 'off'
  }
};
