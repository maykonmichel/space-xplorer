import {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';

import colors from '~/theme/colors';

const duration = 500;
const inputRange = [0, 1];

export default (favorite: boolean) => {
  const value = favorite ? 'Remove from favorites' : 'Add to favorites';

  const [text, setText] = useState(value);

  useEffect(() => {
    const timout = setTimeout(() => setText(value), duration / 2);

    return () => clearTimeout(timout);
  }, [value]);

  const animatedValue = useRef(new Animated.Value(+favorite));

  useEffect(() => {
    Animated.timing(animatedValue.current, {
      duration,
      toValue: +favorite,
      useNativeDriver: false,
    }).start();
  }, [favorite]);

  const backgroundColor = animatedValue.current.interpolate({
    inputRange,
    outputRange: ['transparent', colors.secondary.main],
  });

  const color = animatedValue.current.interpolate({
    inputRange,
    outputRange: [colors.secondary.main, colors.neutral.light],
  });

  const opacity = animatedValue.current.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });

  const progress = animatedValue.current.interpolate({
    inputRange,
    outputRange: favorite ? [0.32, 0.45] : [0.2, 0],
  });

  return {
    backgroundColor,
    color,
    opacity,
    progress,
    text,
  };
};
