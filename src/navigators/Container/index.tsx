import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';

import MainStack from '../MainStack';

const NavigatorsContainer: FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default NavigatorsContainer;
