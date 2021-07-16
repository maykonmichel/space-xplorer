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

export const readFavoriteImages = (cache: ApolloCache<NormalizedCacheObject>) =>
  cache.readQuery<Data>({query: QUERY});

export const writeFavoriteImages = (
  cache: ApolloCache<NormalizedCacheObject>,
  favoriteImages: string[] = [],
) => cache.writeQuery<Data>({query: QUERY, data: {favoriteImages}});

export const initializeFavoriteImages = (
  cache: ApolloCache<NormalizedCacheObject>,
) => writeFavoriteImages(cache);

export const useFavoriteImages = () => useQuery<Data>(QUERY);
