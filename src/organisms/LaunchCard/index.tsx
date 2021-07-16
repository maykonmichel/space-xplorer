import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

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
    <TouchableOpacity
      accessibilityLabel={'Launch card'}
      accessibilityHint={'See launch details'}
      onPress={onPress}>
      <Text accessibilityLabel={'Launch name'}>{mission_name}</Text>
      <Text accessibilityLabel={'Launch date'}>{launch_date_formatted}</Text>
      {uri && (
        <FastImage
          accessibilityLabel={'Launch image'}
          source={{uri}}
          style={styles.image}
        />
      )}
    </TouchableOpacity>
  );
};

export default LaunchCard;
