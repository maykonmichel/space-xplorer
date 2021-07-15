import {useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, {FC} from 'react';

import {LAUNCH, LAUNCHES} from '~/screens';
import Launch from '~/screens/Launch';
import Launches from '~/screens/Launches';

type ParamsList = {
  [LAUNCH]: undefined;
  [LAUNCHES]: undefined;
};

const {Navigator, Screen} = createStackNavigator<ParamsList>();

type NavigationProp = StackNavigationProp<ParamsList>;

export const useMainStackNavigation = () => useNavigation<NavigationProp>();

const MainStack: FC = () => {
  return (
    <Navigator>
      <Screen name={LAUNCH} component={Launch} />
      <Screen name={LAUNCHES} component={Launches} />
    </Navigator>
  );
};

export default MainStack;
