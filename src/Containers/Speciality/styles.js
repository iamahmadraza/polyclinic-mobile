import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../Utils';

export default StyleSheet.create({
  container: {
    ...Metrics.containerStyle,
    paddingTop: 0,
  },
  heading: {
    ...Fonts.style.heading,
    color: Colors.appColor,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: Metrics.screenWidth - 20,
    padding: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    backgroundColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowColor: Colors.appColor,
    shadowOpacity: 0.1,
  },
  listInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  listIcon: {
    height: 40,
    width: 40,
  },
  listArrowIcon: {
    height: 15,
    width: 15,
  },
  listTextContainer: {
    marginLeft: Metrics.normalMargin,
    width: Metrics.screenWidth - 130,
  },
  title: {
    ...Fonts.style.label,
  },
  description: {
    ...Fonts.style.input,
    color: Colors.appColor,
  },
});
