import {ViewStyle} from 'react-native';

export type Color = 'secondary' | 'light';

export type Variant = 'outlined' | 'text';

export type Props = {
  color?: Color;
  onPress: () => void;
  style?: ViewStyle;
  title: string;
  variant?: Variant;
};
