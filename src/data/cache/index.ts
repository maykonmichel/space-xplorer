import {InMemoryCache} from '@apollo/client';

import {initializeFavoriteImages} from '~/data/favoriteImages';

import Launch from './Launch';

const cache = new InMemoryCache({
  typePolicies: {
    Launch,
    LaunchLinks: {
      merge: true,
    },
  },
});

export const initializeCache = () => {
  initializeFavoriteImages(cache);
};

initializeCache();

export default cache;
