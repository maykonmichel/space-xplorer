import React, {FC} from 'react';
import {Linking, Text, View} from 'react-native';

import LaunchImages from '~/organisms/LaunchImages';

import useLaunch from './useLaunch';

const Launch: FC = () => {
  const launch = useLaunch();

  if (!launch) return null;

  const {
    links: {article_link, flickr_images},
    rocket: {rocket_name},
  } = launch;

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
