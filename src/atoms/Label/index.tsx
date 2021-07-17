import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';

import styles from './styles';

export type Props = TextProps;

const Label: FC<Props> = ({children, style, ...props}) => (
  <Text style={[styles.text, style]} {...props}>
    {children}
  </Text>
);

export default Label;
