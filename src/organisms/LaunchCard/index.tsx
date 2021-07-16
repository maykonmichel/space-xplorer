import React, {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

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
    <TouchableOpacity onPress={onPress}>
      <Text>{mission_name}</Text>
      <Text>{launch_date_local}</Text>
      {uri && <Image source={{uri}} style={styles.image} />}
    </TouchableOpacity>
  );
};

export default LaunchCard;
