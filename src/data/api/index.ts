import {ApolloClient, InMemoryCache} from '@apollo/client';

const uri = 'https://api.spacex.land/graphql/';
const cache = new InMemoryCache();

const api = new ApolloClient({uri, cache});

export default api;
