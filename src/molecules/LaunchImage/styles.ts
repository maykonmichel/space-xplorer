import {StyleSheet} from 'react-native';

import colors from '~/theme/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 4,
  },
  footer: {
    borderColor: colors.secondary.main,
    borderWidth: 1,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  footerFavorite: {
    backgroundColor: colors.secondary.main,
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
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.secondary.main,
    marginVertical: 8,
  },
  textFavorite: {
    color: colors.neutral.light,
  },
});
