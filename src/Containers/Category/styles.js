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
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth - 20,
    padding: 30,
    borderWidth: 1,
    borderColor: Colors.appColor,
    borderRadius: 5,
  },
  buttonStyles: {
    marginVertical: Metrics.baseMargin,
  },
});
