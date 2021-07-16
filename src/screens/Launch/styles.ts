import {StyleSheet} from 'react-native';

import colors from '~/theme/colors';

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: 24,
  },
  date: {
    marginHorizontal: 16,
    marginVertical: 4,
    color: colors.neutral.medium,
    fontSize: 16,
  },
  details: {
    margin: 16,
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    marginHorizontal: 16,
    marginTop: 16,
    color: colors.neutral.dark,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
