import {InMemoryCache} from '@apollo/client';

import {initializeFavoriteImages} from '~/data/favoriteImages';

const cache = new InMemoryCache({
  typePolicies: {
    LaunchLinks: {
      merge: true,
    },
  },
});

initializeFavoriteImages(cache);

export default cache;
