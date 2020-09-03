import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Containers/Utils';
export default StyleSheet.create({
  feildContainer: {
    width: Metrics.screenWidth - 50,
    marginHorizontal: 50,
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
    height: 48,
    paddingHorizontal: 13,
    backgroundColor: '#ffffff',
    borderColor: Colors.appColor,
    borderWidth: 1,
    borderRadius: 5,
    ...Fonts.style.input,
  },
});
