module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': 'error',
    'react-native/no-inline-styles': 'error',
    curly: ['error', 'multi'],
  },
  env: {
    jest: true,
  },
};
