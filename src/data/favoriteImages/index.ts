import {ApolloCache, gql, NormalizedCacheObject} from '@apollo/client';

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
