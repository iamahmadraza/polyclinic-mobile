import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet} from 'react-native';
import {Colors} from '../../Containers/Utils';

const DropDown = (props) => {
  return (
    <View style={[styles.feildContainer]}>
      <Text style={styles.fieldLabel}>{props.fieldLabel}</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => props.onChangeHandler(value)}
        items={props.data ? props.data : []}
      />

      {props.errorText !== '' && (
        <Text style={styles.errorLabel}>{props.errorText}</Text>
      )}
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    ...styles.input,
    color: Colors.appColor,
    padding: 10,
  },
  inputAndroid: {
    ...styles.input,
    color: Colors.appColor,
    padding: 10,
  },
});

export default DropDown;
