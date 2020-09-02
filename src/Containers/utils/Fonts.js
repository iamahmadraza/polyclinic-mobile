import {Dimensions} from 'react-native';
import Colors from './Colors';
const type = {
  base: 'Avenir',
  bold: 'Avenir-Medium',
};

const size = {
  h1: (38 * Dimensions.get('window').width) / 375,
  h2: (34 * Dimensions.get('window').width) / 375,
  h3: (30 * Dimensions.get('window').width) / 375,
  h4: (22 * Dimensions.get('window').width) / 375,
  h5: (20 * Dimensions.get('window').width) / 375,
  h6: (19 * Dimensions.get('window').width) / 375,
  large: (18 * Dimensions.get('window').width) / 375,
  regular: (16 * Dimensions.get('window').width) / 375,
  mediumPlus: (15 * Dimensions.get('window').width) / 375,
  medium: (14 * Dimensions.get('window').width) / 375,
  default: (13 * Dimensions.get('window').width) / 375,
  small: (12 * Dimensions.get('window').width) / 375,
  tiny: (8.5 * Dimensions.get('window').width) / 375,
};

const style = {
  title: {
    fontFamily: type.bold,
    fontSize: size.h5,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  heading: {
    fontFamily: type.bold,
    fontSize: size.h5,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  subHeading: {
    fontFamily: type.bold,
    fontSize: size.mediumPlus,
  },
  label: {
    fontFamily: type.bold,
    fontSize: size.regular,
    color: Colors.textColor,
  },
  input: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  error: {
    fontFamily: type.base,
    fontSize: size.default,
    color: Colors.error,
  },
};

export default {
  type,
  size,
  style,
};
