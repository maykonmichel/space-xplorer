import {InMemoryCache} from '@apollo/client';
import {format} from 'date-fns';

import {initializeFavoriteImages} from '~/data/favoriteImages';

const cache = new InMemoryCache({
  typePolicies: {
    Launch: {
      fields: {
        launch_date_formatted: {
          read: (existing, {readField}) => {
            const unix = readField<number>('launch_date_unix') || 0;
            return format(unix, 'MM/dd/yyyy hh:mmaaa');
          },
        },
      },
    },
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
