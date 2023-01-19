import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

interface IProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  fontSize?: number | any;
  onPress?: () => void;
  item: any;
}

export type ButtonProps = React.FC<IProps>;
