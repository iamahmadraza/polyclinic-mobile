import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const DateTimePickerComponent = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    var data =
      props.mode === 'time'
        ? moment(date).format('h:mm a')
        : moment(date).format('DD-MM-yyyy');
    props.onChangeHandler(data);
    hideDatePicker();
  };

  return (
    <View style={[styles.feildContainer, props.containerStyles]}>
      <Text style={styles.fieldLabel}>{props.fieldLabel}</Text>
      <TouchableOpacity onPress={() => showDatePicker()}>
        <View style={[styles.input, props.inputStyles]}>
          <Text style={[styles.fieldLabel, !props.value && {color: '#b5b5b5'}]}>
            {props.value ? props.value : 'Select Date'}
          </Text>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={props.mode ? props.mode : 'date'}
        value={props.value}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {props.errorText !== '' && (
        <Text style={styles.errorLabel}>{props.errorText}</Text>
      )}
    </View>
  );
};

export default DateTimePickerComponent;
