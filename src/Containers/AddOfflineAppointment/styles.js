import {StyleSheet, Platform} from 'react-native';
import {Metrics, Fonts, Colors} from '../Utils';
export default StyleSheet.create({
  container: {
    ...Metrics.containerStyle,
    marginVertical: 20,
    alignItems: 'center',
  },
});
