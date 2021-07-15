import React, {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {Launch} from '~/data/launch';
import {useMainStackNavigation} from '~/navigators/MainStack';
import {LAUNCH} from '~/screens';

const LaunchCard: FC<Launch> = ({
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
      {uri && <Image source={{uri}} style={{width: 200, height: 100}} />}
    </TouchableOpacity>
  );
};

export default LaunchCard;
