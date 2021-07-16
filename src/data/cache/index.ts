import {InMemoryCache} from '@apollo/client';

import {initializeFavoriteImages} from '~/data/favoriteImages';

const cache = new InMemoryCache({
  typePolicies: {
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
