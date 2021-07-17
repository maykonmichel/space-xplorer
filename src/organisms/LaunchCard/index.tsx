import React, {FC} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import Button from '~/atoms/Button';
import {Launch} from '~/data/launch';

import styles from './styles';
import useLaunchCard from './useLaunchCard';

export type Props = Launch;

const LaunchCard: FC<Props> = ({
  id,
  mission_name,
  launch_date_formatted,
  links: {
    flickr_images: [uri],
  },
}) => {
  const {onPress} = useLaunchCard(id);

  return (
    <View accessibilityLabel={'Launch card'} style={styles.container}>
      {uri && (
        <FastImage
          accessibilityLabel={'Launch image'}
          source={{uri}}
          style={styles.image}
        />
      )}
      <Text style={styles.title} accessibilityLabel={'Launch name'}>
        {mission_name}
      </Text>
      <Text style={styles.date} accessibilityLabel={'Launch date'}>
        {launch_date_formatted}
      </Text>
      <Button
        title={'See more'}
        onPress={onPress}
        variant={'text'}
        style={styles.button}
      />
    </View>
  );
};

export default LaunchCard;
