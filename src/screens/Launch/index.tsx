import {Route, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';

import {LAUNCH} from '~/screens';

export type LaunchParams = {
  id: string;
};

type RouteProp = Route<typeof LAUNCH, LaunchParams>;

const Launch: FC = () => {
  const {} = useRoute<RouteProp>();

  return <></>;
};

export default Launch;
