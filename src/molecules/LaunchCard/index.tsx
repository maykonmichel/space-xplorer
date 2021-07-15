import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';

import {Launch} from '~/data/launch';

const LaunchCard: FC<Launch> = ({
  mission_name,
  launch_date_local,
  links: {flickr_images},
}) => {
  const [uri] = flickr_images;

  return (
    <View>
      <Text>{mission_name}</Text>
      <Text>{launch_date_local}</Text>
      {uri && <Image source={{uri}} style={{width: 200, height: 100}} />}
    </View>
  );
};

export default LaunchCard;
