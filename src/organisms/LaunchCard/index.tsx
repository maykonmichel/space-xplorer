import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Launch} from '~/data/launch';
import {useMainStackNavigation} from '~/navigators/MainStack';
import {LAUNCH} from '~/screens';

import styles from './styles';

export type Props = Launch;

const LaunchCard: FC<Props> = ({
  id,
  mission_name,
  launch_date_local,
  links: {flickr_images},
}) => {
  const {navigate} = useMainStackNavigation();

  const onPress = () => navigate(LAUNCH, {id});

  const [uri] = flickr_images;

  return (
    <TouchableOpacity
      accessibilityLabel={'Launch card'}
      accessibilityHint={'See launch details'}
      onPress={onPress}>
      <Text accessibilityLabel={'Launch name'}>{mission_name}</Text>
      <Text accessibilityLabel={'Launch date'}>{launch_date_local}</Text>
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
