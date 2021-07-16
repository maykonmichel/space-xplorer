import {Route, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {useLaunchQuery} from '~/data/launch';
import {useMainStackNavigation} from '~/navigators/MainStack';

import {LAUNCH} from '~/screens';

import {LaunchParams} from './types';

type RouteProp = Route<typeof LAUNCH, LaunchParams>;

export default () => {
  const {
    params: {id},
  } = useRoute<RouteProp>();
  const {setOptions} = useMainStackNavigation();

  const {data: {launch} = {}} = useLaunchQuery(id);

  useEffect(() => {
    setOptions({title: launch?.mission_name});
  }, [launch?.mission_name, setOptions]);

  return launch;
};
