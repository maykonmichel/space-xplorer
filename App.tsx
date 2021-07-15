import {ApolloProvider} from '@apollo/client';
import React from 'react';

import {useApiClient} from '~/data/api';
import NavigatorsContainer from '~/navigators/Container';

export default () => {
  const client = useApiClient();

  if (!client) return null;

  return (
    <ApolloProvider client={client}>
      <NavigatorsContainer />
    </ApolloProvider>
  );
};
