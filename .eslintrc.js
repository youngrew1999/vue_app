module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: [
    'plugin:vue/recommended',
    'standard',
  ],

  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    'chrome': true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    'comma-dangle': ["error", 'always-multiline'],
    'space-before-function-paren': 0,
    'object-curly-spacing': 0,
    'prefer-const': 0,
    'no-unneeded-ternary': ["error", { "defaultAssignment": true }],
    'vue/max-attributes-per-line': 0,
    'vue/attributes-order': 0,
    'vue/require-default-prop': 0,
    'no-control-regex': 0,

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
}
