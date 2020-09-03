import {StyleSheet} from 'react-native';
import {Adjust, Colors} from '../Utils';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    // width: Adjust(500),
    height: Adjust(200),
  },
});
