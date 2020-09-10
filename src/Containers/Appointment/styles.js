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
    width: Metrics.screenWidth - 50,
  },
  helpLineText: {
    marginVertical: 5,
    color: 'gray',
  },
  item: {
    borderColor: Colors.appColor,
    borderWidth: 1,
    margin: Metrics.baseMargin / 2,
    padding: Metrics.baseMargin,
    borderRadius: 10,
  },
  itemSelected: {
    backgroundColor: Colors.appColor,
    margin: Metrics.baseMargin / 2,
    padding: Metrics.baseMargin,
    borderRadius: 10,
  },
  itemText: {
    ...Fonts.style.subHeading,
    color: Colors.appColor,
  },
  itemTextSelected: {
    ...Fonts.style.subHeading,
    color: 'white',
  },
  listContainer: {
    width: Metrics.screenWidth - 20,
    marginTop: 10,
  },
  contactContainer: {
    width: Metrics.screenWidth - 20,
    paddingVertical: Metrics.baseMargin,
  },
  contactLabel: {
    ...Fonts.style.subHeading,
    fontWeight: '700',
    color: Colors.appColor,
  },
  contactText: {
    ...Fonts.style.subHeading,
    fontWeight: '700',
    color: Colors.redShade,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: Metrics.baseMargin,
    width: Metrics.screenWidth / 2 + 40,
    textAlign: 'center',
    paddingVertical: Metrics.baseMargin,
    borderColor: Colors.redShade,
  },
});
