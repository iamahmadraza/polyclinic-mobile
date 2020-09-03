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
  itemContainer: {
    width: Metrics.screenWidth - 20,
    padding: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    backgroundColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowColor: Colors.appColor,
    shadowOpacity: 0.2,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
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
  },
  name: {
    ...Fonts.style.label,
    fontWeight: '700',
    color: Colors.appColor,
  },
  status: {
    color: Colors.redShade,
    fontWeight: '500',
  },
  label: {
    ...Fonts.style.input,
    color: Colors.appColor,
    marginTop: Metrics.baseMargin,
  },
  specialities: {
    ...Fonts.style.input,
    fontWeight: '700',
    color: 'gray',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth - 40,
    marginTop: Metrics.baseMargin,
  },
  buttonCotainer: {
    width: Metrics.screenWidth / 2 - 30,
    backgroundColor: Colors.appColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Metrics.baseMargin,
    borderRadius: Metrics.buttonRadius,
  },
  buttonText: {
    ...Fonts.style.input,
    color: 'white',
  },
});
