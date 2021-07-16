import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

export type Props = {
  onPress: (uri: string) => void;
  uri: string;
};

const LaunchImage: FC<Props> = ({onPress, uri}) => {
  const emit = () => onPress(uri);

  return (
    <TouchableOpacity
      onPress={emit}
      accessibilityLabel={'Toggle favorite'}
      accessibilityRole={'imagebutton'}>
      <FastImage
        source={{uri}}
        style={styles.image}
        accessibilityRole={'image'}
      />
    </TouchableOpacity>
  );
};

export default LaunchImage;
