import {ApolloClient, NormalizedCacheObject} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageWrapper, persistCache} from 'apollo3-cache-persist';
import {useEffect, useState} from 'react';

import cache from '~/data/cache';

const uri = 'https://api.spacex.land/graphql';

export const useApiClient = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    const init = async () => {
      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
      });

      setClient(new ApolloClient({uri, cache}));
    };

    init();
  }, []);

  return client;
};
