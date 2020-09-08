import React, {useState} from 'react';
import {View, TextInput, Text, Button, Platform} from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerComponent = (props) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    // <View style={[styles.feildContainer, props.containerStyles]}>
    //   <Text style={styles.fieldLabel}>{props.fieldLabel}</Text>
    //   <TextInput
    //     placeholder={props.fieldLabel}
    //     style={[styles.input, props.inputStyles]}
    //     onChangeText={(text) => props.onChangeText(text)}
    //     autoCapitalize="none"
    //     secureTextEntry={props.secureTextEntry}
    //     value={props.value}
    //   />
    //   {props.errorText !== '' && (
    //     <Text style={styles.errorLabel}>{props.errorText}</Text>
    //   )}
    // </View>
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimePickerComponent;
