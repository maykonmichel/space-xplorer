import {
  ApolloCache,
  gql,
  NormalizedCacheObject,
  useQuery,
} from '@apollo/client';

const QUERY = gql`
  {
    favoriteImages @client
  }
`;

type Data = {
  favoriteImages: string[];
};

const data: Data = {
  favoriteImages: [],
};

export const initializeFavoriteImages = (
  cache: ApolloCache<NormalizedCacheObject>,
) => cache.writeQuery<Data>({query: QUERY, data});

export const useFavoriteImages = () => useQuery<Data>(QUERY);
