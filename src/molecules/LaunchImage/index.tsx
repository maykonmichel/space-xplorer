import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import favoriteAnimation from '~/assets/animations/favorite.json';

import styles from './styles';

export type Props = {
  favorite: boolean;
  onPress: (uri: string) => void;
  uri: string;
};

const LaunchImage: FC<Props> = ({favorite, onPress, uri}) => {
  const emit = () => onPress(uri);

  const text = favorite ? 'Remove from favorites' : 'Add to favorites';

  return (
    <TouchableOpacity
      onPress={emit}
      accessibilityLabel={'Toggle favorite'}
      accessibilityRole={'imagebutton'}
      style={styles.container}>
      <FastImage
        source={{uri}}
        style={styles.image}
        accessibilityRole={'image'}
      />
      <LottieView
        source={favoriteAnimation}
        style={styles.animation}
        loop={false}
      />
      <View style={[styles.footer, favorite && styles.footerFavorite]}>
        <Text style={[styles.text, favorite && styles.textFavorite]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LaunchImage;
