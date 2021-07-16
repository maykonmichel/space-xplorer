const {defaults} = require('ts-jest/presets');

const ignoreLibs = [
  '@react-native',
  'react-native',
  'react-native-iphone-x-helper',
  '@react-navigation',
  'react-native-snap-carousel',
];

module.exports = {
  ...defaults,
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.ts'],
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
  transformIgnorePatterns: [`node_modules/(?!(${ignoreLibs.join('|')})/)`],
};
