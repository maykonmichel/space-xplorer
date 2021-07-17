import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useStyles} from './styles';
import {Props} from './types';

const Button: FC<Props> = props => {
  const {onPress, style, title} = props;

  const styles = useStyles(props);

  return (
    <TouchableOpacity
      accessibilityRole={'button'}
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
