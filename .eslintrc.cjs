module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['standard', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'eslint-disable-next-line ': 0,
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    camelcase: 0
  }
}
