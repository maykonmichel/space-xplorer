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
    <TouchableOpacity onPress={emit}>
      <Image source={{uri}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default LaunchImage;
