import React, {FC} from 'react';
import {ScrollView, Text, View} from 'react-native';

import Button from '~/atoms/Button';
import Feedback from '~/atoms/Feedback';
import Label from '~/atoms/Label';
import LaunchImages from '~/organisms/LaunchImages';

import styles from './styles';
import useLaunchScreen from './useLaunchScreen';

const Launch: FC = () => {
  const {error, launch, loading, openArticle} = useLaunchScreen();

  if (loading) return <Feedback type={'loading'} />;

  if (error) return <Feedback type={'error'} />;

  if (!launch) return <Feedback type={'empty'} />;

  const {
    details,
    launch_date_formatted,
    links: {article_link, flickr_images},
    rocket: {rocket_name},
  } = launch;

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.left}>
          <Label>Rocket name</Label>
          <Text style={styles.title}>{rocket_name}</Text>
        </View>
        <View style={styles.right}>
          <Label>Launch date</Label>
          <Text style={styles.date}>{launch_date_formatted}</Text>
        </View>
      </View>
      <LaunchImages data={flickr_images} />
      {!!details && (
        <>
          <Label style={styles.label}>Details</Label>
          <Text style={styles.details}>{details}</Text>
        </>
      )}
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
