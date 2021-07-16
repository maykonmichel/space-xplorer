import {Route, useRoute} from '@react-navigation/native';
import React, {FC} from 'react';
import {Linking, Text, View} from 'react-native';

import {useLaunchQuery} from '~/data/launch';
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

  const {data} = useLaunchQuery(id);

  if (!data) return null;

  const {
    launch: {
      rocket: {rocket_name},
      links: {article_link, flickr_images},
    },
  } = data;

  const images = flickr_images.slice(0, 3);

  const openArticle = () => Linking.openURL(article_link);

  return (
    <View>
      <Text>{rocket_name}</Text>
      <LaunchImages data={images} />
      <Text onPress={openArticle}>{article_link}</Text>
    </View>
  );
};

export default Launch;
