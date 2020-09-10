import {StyleSheet, Platform} from 'react-native';
import {Metrics, Fonts, Colors} from '../Utils';
export default StyleSheet.create({
  container: {
    ...Metrics.containerStyle,
  },
  card: {
    height: Metrics.screenWidth / 2 - 30,
    width: Metrics.screenWidth / 2 - 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.appColor,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutCotainer: {
    // backgroundColor: 'red',
    width: '100%',
    padding: 20,
    alignItems: 'flex-end',
  },
  cardText: {
    ...Fonts.style.subHeading,
    fontSize: Fonts.size.medium,
    color: Colors.appColor,
  },
  cardLogo: {
    height: '25%',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logout: {
    ...Fonts.style.input,
    color: Colors.appColor,
    borderColor: Colors.appColor,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
