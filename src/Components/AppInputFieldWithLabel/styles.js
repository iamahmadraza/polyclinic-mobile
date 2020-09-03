import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Containers/Utils';
export default StyleSheet.create({
  feildContainer: {
    width: Metrics.screenWidth - 50,
  },
  fieldLabel: {
    ...Fonts.style.input,
    fontWeight: '500',
    color: Colors.appColor,
    marginBottom: 5,
  },
  errorLabel: {
    ...Fonts.style.error,
  },
  input: {
    height: 45,
    paddingHorizontal: 13,
    backgroundColor: '#ffffff',
    borderColor: Colors.appColor,
    borderWidth: 1,
    borderRadius: 5,
    ...Fonts.style.input,
  },
});
