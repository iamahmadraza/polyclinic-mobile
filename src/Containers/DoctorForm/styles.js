import {StyleSheet, Platform} from 'react-native';
import {Metrics, Fonts, Colors} from '../Utils';
export default StyleSheet.create({
  container: {
    // ...Metrics.containerStyle,
    flexGrow: 1,
    paddingVertical: 10,
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
});
