import React from 'react';
import { Text, TextStyle } from 'react-native';
import { Colors } from '../../utils/styles';

type TextAlignType = TextStyle['textAlign'];
type FontWeightType = TextStyle['fontWeight'];
type AlignSelfType = TextStyle['alignSelf'];
type TextTransformType = TextStyle['textTransform'];
type TextDecorationType = TextStyle['textDecorationLine'];

interface IProps {
  color?: string;
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginStart?: number;
  marginEnd?: number;
  fontWeight?: FontWeightType;
  textAlign?: TextAlignType;
  textDecoration?: TextDecorationType;
  alignSelf?: AlignSelfType;
  textTransform?: TextTransformType;
  opacity?: number;
  letterSpacing?: number;
  type?: 'h1' | 'h2' | 'h3Medium' | 'h3SemiBold' | 't1' | 't2' | 't3' | 't3Bold' | 't4' | 't5' | 't5Bold' | 't6' | 'button';
  children: React.ReactNode;
  numberOfLines?: number;
  lineBreakMode?: 'tail' | 'clip' | 'middle' | 'head';
  flex?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  width?: number;
}

export const SText = ({
  color = Colors.black,
  fontSize = 14,
  marginTop = 0,
  marginBottom = 0,
  marginStart = 0,
  marginEnd = 0,
  textAlign = 'left',
  textDecoration = 'none',
  alignSelf = 'auto',
  opacity = 1,
  children,
  lineBreakMode,
  numberOfLines,
  flex,
  flexWrap,
  width,
}: IProps) => {
  return (
    <Text
      style={[
        {
          flex,
          flexWrap,
          color,
          marginTop,
          marginBottom,
          marginStart,
          marginEnd,
          textAlign,
          alignSelf,
          opacity,
          textDecorationLine: textDecoration,
          fontSize,
          width,
        },
      ]}
      lineBreakMode={lineBreakMode}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

