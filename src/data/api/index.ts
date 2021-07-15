import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageWrapper, persistCache} from 'apollo3-cache-persist';
import {useEffect, useState} from 'react';

const URI = 'https://api.spacex.land/graphql';

export const useApiClient = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    const init = async () => {
      const cache = new InMemoryCache();

      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
      });

      setClient(new ApolloClient({uri: URI, cache}));
    };

    init();
  }, []);

  return client;
};
