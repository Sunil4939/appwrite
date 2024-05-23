import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // Primary
  // primary: '#FA4A0C',
  primary: '#EE2761',
  pink: '#EE2761',
  lightpink: '#EE27611A',

  danger: "#FF0000",


  darkYellow: '#D7C736',


  pink2: '#959595',
  pink3: '#BFB5AC',
  pink4: '#9A9A9A',
  pink5: '#D9D9D9',

  // light
  light: '#CDCDCD',
  //white
  white: '#FFFFFF',

  gray63: '#535763',
  gray53: 'rgba(154, 154, 154, 0.53)',
  gray8F: '#8F8F8F',

  placeholderColor: '#8F8F8F',
  

  // black
  black: '#000000',
  black1: 'rgba(100, 100, 100, 1)',
  black25: 'rgba(0, 0, 0, 0.25)',
  black61: '#EE2761',
  black4: '#444444',
  black38: '#353638',

  // blue
  blue: '#1080E9',

  // grey
  gray: '#616161',
  gray1: 'rgba(101, 98, 98, 1)',
  // gray10: 'rgba(89, 84, 84, 1)',
  gray10: "#E5E5E5",
  gray20: '#CCCCCC',
  gray30: '#A1A1A1',
  gray40: '#999999',
  gray50: '#7F7F7F',
  gray60: '#666666',
  gray70: '#4C4C4C',
  gray80: '#333333',
  gray85: '#242526',
  gray90: '#191919',

  // lightGray
  lightGray: '#C1C1C1',
  lightGray1: '#DDDDDD',
  lightGray10: 'rgba(242, 242, 242, 1)',
  lightGray31: 'rgba(196, 196, 196, 0.31)',
  grayD9: '#D9D9D9',

  // yellow
  yellow: '#FFC107',

  // orange
  orange: '#FF3D00',

  // green
  green: 'green',
  lightgreen: '#1AAB2A',
  // green: '#00FF47',
  green10: 'rgba(30, 125, 40, 1)',
  green1: 'rgba(71, 183, 43, 1)',
  

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentWhite2: 'rgba(255, 255, 255, 0.2)',
  transparentWhite3: 'rgba(255, 255, 255, 0.3)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack2: 'rgba(0, 0, 0, 0.2)',
  transparentBlack3: 'rgba(0, 0, 0, 0.3)',
  transparentBlack4: 'rgba(0, 0, 0, 0.4)',
  transparentBlack5: 'rgba(0, 0, 0, 0.5)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};

export const SIZES = {
 
  // app dimensions
  width,
  height,
};

export const FONTS = {
  //Font family
  black: 'Poppins-Black-900',
  bold: 'Poppins-Bold-700',
  semiBold: 'Poppins-SemiBold-600',
  medium: 'Poppins-Medium-500',
  regular: 'Poppins-Regular-400',
  light: 'Poppins-Light-300',
  thin: 'Poppins-Thin-250',

  fourHundred: {fontFamily: 'Poppins-Regular-400'},
  fiveHundred: {fontFamily: 'Poppins-Medium-500'},
  sixHundred: {fontFamily: 'Poppins-SemiBold-600'},
  sevenHundred: {fontFamily: 'Poppins-Bold-700'},
  eightHundred: {fontFamily: 'Poppins-ExtraBold-800'},
  nineHundred: {fontFamily: 'Poppins-Black-900'},
};

export const darkTheme = {
  backgroundColor: COLORS.darkBackground,
};

export const lightTheme = {
  backgroundColor: COLORS.white,
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
