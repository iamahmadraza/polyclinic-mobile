import {StyleSheet} from 'react-native';
import {Adjust, Colors, Metrics} from '../Utils';
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 30,
  },

  logo: {
    width: Adjust(Metrics.screenWidth - 50),
  },
});
