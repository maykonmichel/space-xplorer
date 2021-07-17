import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {Text, View} from 'react-native';

import empty from '~/assets/animations/empty.json';
import error from '~/assets/animations/error.json';
import loading from '~/assets/animations/loading.json';

import styles from './styles';

const sources = {empty, error, loading};

type Type = 'empty' | 'error' | 'loading';

const getText = (type: Type) => {
  switch (type) {
    case 'empty':
      return 'Nothing found';
    case 'error':
      return 'Something went wrong';
    case 'loading':
      return 'Fetching data';
  }
};

type Props = {
  type: Type;
};

const Feedback: FC<Props> = ({type}) => {
  const text = getText(type);

  return (
    <View style={styles.container}>
      <LottieView source={sources[type]} style={styles.animation} autoPlay />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Feedback;
