const {defaults} = require('ts-jest/presets');

module.exports = {
  ...defaults,
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    ...defaults.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
};
