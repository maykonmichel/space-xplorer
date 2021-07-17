import {StyleSheet} from 'react-native';

import colors from '~/theme/colors';

export default StyleSheet.create({
  animation: {
    position: 'absolute',
    left: -5,
    top: -5,
  },
  container: {
    borderRadius: 4,
  },
  footer: {
    borderColor: colors.secondary.main,
    borderWidth: 1,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  image: {
    aspectRatio: 1920 / 1080,
    width: '100%',
    borderColor: colors.secondary.main,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  lottie: {
    width: 75,
  },
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
