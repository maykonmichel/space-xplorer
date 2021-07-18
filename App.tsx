import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {StatusBar} from 'react-native';

import {useApiClient} from '~/data/api';
import NavigatorsContainer from '~/navigators/Container';
import colors from '~/theme/colors';

export default () => {
  const client = useApiClient();

  if (!client) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.primary.main} />
      <ApolloProvider client={client}>
        <NavigatorsContainer />
      </ApolloProvider>
    </>
  );
};
