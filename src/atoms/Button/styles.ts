import {StyleSheet} from 'react-native';

import colors from '~/theme/colors';

import {Color, Props} from './types';

const getHex = (color?: Color) => {
  switch (color) {
    case 'light':
      return colors.neutral.light;
    case 'secondary':
      return colors.secondary.main;
    case 'primary':
    default:
      return colors.primary.main;
  }
};

export const useStyles = ({color, variant}: Props) => {
  const hex = getHex(color);

  return StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: variant === 'text' ? 0 : 1,
      borderColor: hex,
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    title: {
      color: hex,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
};
