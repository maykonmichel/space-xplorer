import {ApolloProvider} from '@apollo/client';
import React from 'react';

import api from '~/data/api';
import NavigatorsContainer from '~/navigators/Container';

export default () => {
  return (
    <ApolloProvider client={api}>
      <NavigatorsContainer />
    </ApolloProvider>
  );
};
