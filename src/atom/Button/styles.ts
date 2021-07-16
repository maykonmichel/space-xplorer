import {StyleSheet} from 'react-native';

import colors from '~/theme/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.secondary.main,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: colors.secondary.main,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
