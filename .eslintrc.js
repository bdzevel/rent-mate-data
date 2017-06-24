module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "prefer-arrow-callback": "off",
    "space-before-function-paren": "off",
    "func-names": "off",
    'array-bracket-spacing': [ 'error', 'always' ],

    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  }
};