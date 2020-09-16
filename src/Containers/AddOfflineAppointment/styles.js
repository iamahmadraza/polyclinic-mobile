import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../Utils';
export default StyleSheet.create({
  container: {
    ...Metrics.containerStyle,
    marginVertical: 20,
    alignItems: 'center',
  },
  hospitalsListing: {position: 'relative', top: -15},
  hospitalItem: {
    width: Metrics.screenWidth - 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    padding: Metrics.baseMargin,
    borderColor: Colors.appColor,
    borderWidth: 1,
  },
  hospitalText: {
    ...Fonts.style.subHeading,
    color: Colors.appColor,
  },
});
