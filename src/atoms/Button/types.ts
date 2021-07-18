import {ViewStyle} from 'react-native';

export type Color = 'primary' | 'secondary' | 'light';

export type Variant = 'outlined' | 'text';

export type Props = {
  accessibilityLabel?: string | undefined;
  color?: Color;
  onPress: () => void;
  style?: ViewStyle;
  title: string;
  variant?: Variant;
};
