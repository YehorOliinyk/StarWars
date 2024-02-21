import {
  ColorValue,
  Dimensions,
  StatusBarStyle,
  StyleSheet,
} from 'react-native';

// Dimensions
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

// StatusBar
export const STATUS_BAR_BACKGROUND: ColorValue = 'transparent';
export const STATUS_BAR_STYLE: StatusBarStyle = 'dark-content';

// BaseStyle
export const baseStyle = StyleSheet.create({
  screenView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 55,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export enum Colors {
  'white' = '#fff',
  'black' = '#000',
  'red' = '#E05F58',
  'grey' = '#F6F5F2',
}
