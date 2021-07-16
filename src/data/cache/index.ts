import {InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    LaunchLinks: {
      merge: true,
    },
  },
});

export default cache;
