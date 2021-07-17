import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import favoriteAnimation from '~/assets/animations/favorite.json';

import styles from './styles';
import useAnimation from './useAnimation';

export type Props = {
  favorite: boolean;
  onPress: (uri: string) => void;
  uri: string;
};

const LaunchImage: FC<Props> = ({favorite, onPress, uri}) => {
  const emit = () => onPress(uri);

  const {backgroundColor, color, opacity, progress, text} =
    useAnimation(favorite);

  return (
    <View accessibilityLabel={'Launch image'}>
      <FastImage
        source={{uri}}
        style={styles.image}
        accessibilityRole={'image'}
      />
      <TouchableOpacity
        onPress={emit}
        accessibilityLabel={text}
        accessibilityRole={'switch'}
        accessibilityState={{selected: favorite}}
        style={styles.animation}>
        <LottieView
          style={styles.lottie}
          source={favoriteAnimation}
          loop={false}
          progress={progress}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={emit}
        accessibilityLabel={text}
        accessibilityRole={'button'}
        style={styles.footer}>
        <Animated.View style={{backgroundColor}}>
          <Animated.Text style={[styles.text, {color, opacity}]}>
            {text}
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default LaunchImage;
