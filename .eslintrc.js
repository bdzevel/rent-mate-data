module.exports = {
  'extends': 'airbnb-base',
  'rules': {
    'prefer-arrow-callback': 'off',
    'space-before-function-paren': 'off',
    'func-names': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'guard-for-in': 'off',
    'array-bracket-spacing': [ 'error', 'always' ],

    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  }
};