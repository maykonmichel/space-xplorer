import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageWrapper, persistCache} from 'apollo3-cache-persist';
import {useEffect, useState} from 'react';

const uri = 'https://api.spacex.land/graphql';
const cache = new InMemoryCache({
  typePolicies: {
    LaunchLinks: {
      merge: true,
    },
  },
});

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
