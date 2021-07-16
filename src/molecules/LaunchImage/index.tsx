import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import styles from './styles';

export type Props = {
  onPress: (uri: string) => void;
  uri: string;
};

const LaunchImage: FC<Props> = ({onPress, uri}) => {
  const emit = () => onPress(uri);

  return (
    <TouchableOpacity onPress={emit} accessibilityLabel={'Toggle favorite'}>
      <Image source={{uri}} style={styles.image} accessibilityRole={'image'} />
    </TouchableOpacity>
  );
};

export default LaunchImage;
