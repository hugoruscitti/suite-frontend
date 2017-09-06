module.exports = {
  globals: {
    server: true,
    moment: true,
    Handsontable: true,
    esperar: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
    jquery: true,
  },
  rules: {
  }
};
