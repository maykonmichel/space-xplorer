import {InMemoryCache} from '@apollo/client';

import {initializeFavoriteImages} from '~/data/favoriteImages';

import Launch from './Launch';
import LaunchLinks from './LaunchLinks';
import Query from './Query';

const cache = new InMemoryCache({
  typePolicies: {
    Launch,
    LaunchLinks,
    Query,
  },
});

export const initializeCache = () => {
  initializeFavoriteImages(cache);
};

initializeCache();

export default cache;
