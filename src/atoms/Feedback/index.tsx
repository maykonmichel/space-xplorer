import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {FC} from 'react';
import {Text, View} from 'react-native';

import empty from '~/assets/animations/empty.json';
import error from '~/assets/animations/error.json';
import loading from '~/assets/animations/loading.json';

import Button from '~/atoms/Button';

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
  const {canGoBack, goBack} = useNavigation();

  const showGoBack = type === 'error' && canGoBack();

  const text = getText(type);

  return (
    <View style={styles.container}>
      {showGoBack && <Text style={styles.text}>{text}</Text>}
      <LottieView source={sources[type]} style={styles.animation} autoPlay />
      {showGoBack ? (
        <Button title={'Go back'} onPress={goBack} color={'light'} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </View>
  );
};

export default Feedback;
