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
  listInnerContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  listIcon: {
    height: 50,
    width: 50,
  },
  listArrowIcon: {
    height: 15,
    width: 15,
  },
  listTextContainer: {
    marginLeft: Metrics.normalMargin,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    ...Fonts.style.label,
    fontWeight: '700',
    color: Colors.appColor,
  },
  phoneNumber: {
    ...Fonts.style.input,
    color: Colors.redShade,
  },
  location: {
    ...Fonts.style.input,
    color: Colors.forestgreen,
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
  noDataFound: {
    paddingVertical: Metrics.baseMargin,
    ...Fonts.style.subHeading,
    color: Colors.appColor,
  },
  pmdc: {
    ...Fonts.style.error,
    color: Colors.redShade,
    fontWeight: 'bold',
  },
});
