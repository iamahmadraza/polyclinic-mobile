import {StyleSheet, Platform} from 'react-native';
import {Metrics, Adjust, Fonts, Colors} from '../../utils';
export default StyleSheet.create({
  feildContainer: {
    width: '100%',
    paddingHorizontal: 44,
  },
  fieldLabel: {
    ...Fonts.style.label,
    marginBottom: 8,
  },
  errorLabel: {
    ...Fonts.style.error,
    paddingVertical: 5,
  },
  input: {
    width: 320,
    height: 48,
    paddingHorizontal: 13,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    ...Fonts.style.input,
  },
});
