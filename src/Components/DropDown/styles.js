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
  },
  fieldLabelDropDown: {
    ...Fonts.style.input,
    color: Colors.appColor,
  },
  errorLabel: {
    ...Fonts.style.error,
  },
  input: {
    height: 45,
    marginTop: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderColor: Colors.appColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  dropDownItemContainer: {
    borderColor: Colors.appColor,
  },
});
