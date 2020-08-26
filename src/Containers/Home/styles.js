import {StyleSheet, Platform} from 'react-native';
import {Metrics, Fonts, Colors} from '../utils';
export default StyleSheet.create({
  container: {
    ...Metrics.containerStyle,
    paddingTop: 0
  },
  heading: {
    ...Fonts.style.heading,
    color: Colors.appColor
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    height: 60,
    marginVertical: 5,
    backgroundColor: Colors.appColor,
    borderWidth: 1,
    borderColor: Colors.appColor,
    borderRadius: 5,
    padding: 10,
  },
  headerText: {
    ...Fonts.style.heading
  },
  headerIcon: {
    height: 15,
    width: 15
  },
  subCategory: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    height: 60,
    marginVertical: 1,
    backgroundColor: Colors.textColor,
    borderBottomWidth: 1,
    borderColor: Colors.appColor,
    borderRadius: 3,
    padding: 10
  },
  subCategoryText: {
    ...Fonts.style.subHeading,
    color: 'black'
  }
});
