import React from 'react';
import { View, ViewProps } from 'react-native';

interface IProps extends ViewProps {
  children: React.ReactNode;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flex?: number;
  width?: string;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}

export const SFlex = ({
  children,
  flexDirection = 'row',
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  alignItems = 'center',
  flex,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingTop = 0,
  paddingBottom = 0,
}: IProps) => {
  return (
    <View
      style={[
        {
          flexDirection,
          flexWrap,
          justifyContent,
          alignItems,
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
        },
        flex ? { flex } : {},
      ]}
    >
      {children}
    </View>
  );
};
