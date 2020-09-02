import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Containers/utils';
export default StyleSheet.create({
  buttonMainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  buttonContainer: {
    width: 236,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 25,
    backgroundColor: Colors.appColor,
    borderWidth: 2,
    borderColor: Colors.textColor,
  },
  buttonLabel: {
    ...Fonts.style.heading,
    color: 'white',
  },
});
