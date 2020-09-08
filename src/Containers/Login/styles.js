import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../Utils';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth,
  },
  userNameInput: {
    marginVertical: 20,
    fontSize: 20,
  },
  loginButtonStyles: {
    marginVertical: 33,
  },
  loginButtonStylesWithError: {
    marginTop: 25,
    marginBottom: 20,
  },
  textStyle: {
    color: Colors.appColor,
    fontSize: 16,
  },
  signUpText: {
    ...Fonts.style.subHeading,
    color: Colors.redShade,
    marginLeft: 5,
  },
  errorTextLogin: {
    color: 'red',
    marginBottom: 20,
    fontSize: 15,
  },
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
