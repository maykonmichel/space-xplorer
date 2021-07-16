import {useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, {FC} from 'react';

import {LAUNCH, LAUNCHES} from '~/screens';
import Launch, {LaunchParams} from '~/screens/Launch';
import Launches from '~/screens/Launches';
import colors from '~/theme/colors';

type ParamsList = {
  [LAUNCH]: LaunchParams;
  [LAUNCHES]: undefined;
};

const {Navigator, Screen} = createStackNavigator<ParamsList>();

type NavigationProp = StackNavigationProp<ParamsList>;

export const useMainStackNavigation = () => useNavigation<NavigationProp>();

const screenOptions: StackNavigationOptions = {
  headerTintColor: colors.neutral.light,
  headerStyle: {backgroundColor: colors.primary.main},
};

const MainStack: FC = () => {
  return (
    <Navigator initialRouteName={LAUNCHES} screenOptions={screenOptions}>
      <Screen name={LAUNCH} component={Launch} />
      <Screen
        name={LAUNCHES}
        component={Launches}
        options={{title: 'Space X launches'}}
      />
    </Navigator>
  );
};

export default MainStack;
