import {StyleSheet} from 'react-native';

import colors from '~/theme/colors';

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginVertical: 16,
  },
  date: {
    color: colors.neutral.medium,
    fontSize: 16,
    textAlign: 'right',
  },
  details: {
    marginHorizontal: 16,
    marginVertical: 8,
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 24,
  },
  header: {
    flexDirection: 'row',
    margin: 16,
  },
  label: {
    marginHorizontal: 16,
  },
  left: {
    flex: 2,
    justifyContent: 'space-between',
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: colors.neutral.dark,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
