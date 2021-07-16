import {Route, useRoute} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {Linking, Text, View} from 'react-native';

import {useLaunchQuery} from '~/data/launch';
import {useMainStackNavigation} from '~/navigators/MainStack';
import LaunchImages from '~/organisms/LaunchImages';

import {LAUNCH} from '~/screens';

export type LaunchParams = {
  id: string;
};

type RouteProp = Route<typeof LAUNCH, LaunchParams>;

const Launch: FC = () => {
  const {
    params: {id},
  } = useRoute<RouteProp>();
  const {setOptions} = useMainStackNavigation();

  const {data} = useLaunchQuery(id);

  useEffect(() => {
    setOptions({title: data?.launch.mission_name});
  }, [data?.launch.mission_name, setOptions]);

  if (!data) return null;

  const {
    launch: {
      rocket: {rocket_name},
      links: {article_link, flickr_images},
    },
  } = data;

  const openArticle = () => Linking.openURL(article_link);

  return (
    <View>
      <Text>{rocket_name}</Text>
      <LaunchImages data={flickr_images} />
      <Text onPress={openArticle}>{article_link}</Text>
    </View>
  );
};

export default Launch;
