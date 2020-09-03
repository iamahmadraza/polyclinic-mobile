import {StyleSheet} from 'react-native';
import {Colors, Fonts, Adjust} from '../../Containers/Utils';
export default StyleSheet.create({
  buttonMainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  buttonContainer: {
    width: Adjust(200),
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: 25,
    backgroundColor: Colors.appColor,
    borderWidth: 1,
    borderColor: Colors.textColor,
  },
  buttonLabel: {
    ...Fonts.style.label,
    color: 'white',
  },
});
