import {StyleSheet} from 'react-native';

import colors from '~/theme/colors';

export default StyleSheet.create({
  button: {
    marginVertical: 8,
  },
  container: {
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 4,
    backgroundColor: colors.neutral.light,
    elevation: 4,
  },
  date: {
    marginHorizontal: 16,
    color: colors.neutral.medium,
  },
  image: {
    aspectRatio: 1920 / 1080,
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  title: {
    margin: 16,
    marginBottom: 4,
    color: colors.neutral.dark,
    fontSize: 24,
  },
});
