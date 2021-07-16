import React, {FC} from 'react';
import {ButtonProps, Text, TouchableOpacity, ViewStyle} from 'react-native';

import styles from './styles';

export type Props = ButtonProps & {
  style?: ViewStyle;
};

const Button: FC<Props> = ({title, style, ...props}) => {
  return (
    <TouchableOpacity
      accessibilityRole={'button'}
      style={[styles.container, style]}
      {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
