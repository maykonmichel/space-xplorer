import React, {FC} from 'react';
import {ScrollView, Text} from 'react-native';

import Button from '~/atoms/Button';
import LaunchImages from '~/organisms/LaunchImages';

import styles from './styles';
import useLaunchScreen from './useLaunchScreen';

const Launch: FC = () => {
  const {launch, openArticle} = useLaunchScreen();

  if (!launch) return null;

  const {
    details,
    launch_date_formatted,
    links: {article_link, flickr_images},
    rocket: {rocket_name},
  } = launch;

  return (
    <ScrollView>
      <Text style={styles.title}>{rocket_name}</Text>
      <Text style={styles.date}>{launch_date_formatted}</Text>
      <LaunchImages data={flickr_images} />
      <Text style={styles.details}>{details}</Text>
      {article_link && (
        <Button
          title={'Read article'}
          onPress={openArticle}
          style={styles.button}
        />
      )}
    </ScrollView>
  );
};

export default Launch;
