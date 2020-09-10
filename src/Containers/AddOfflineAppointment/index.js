import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '../../Components/DateTimePicker';
import AppButton from '../../Components/AppButton';
import Container from '../../Components/Container';
import styles from './styles';
import {connect} from 'react-redux';
import DropDown from '../../Components/DropDown';
import {addAppointment} from './actions';
import Toast from 'react-native-simple-toast';

const AddOfflineAppoutment = (props) => {
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [hospital, setHospital] = useState('');

  const onChangeHandler = (value, func) => {
    func(value);
  };

  const onSubmit = () => {
    if (date !== '' && timeFrom !== '' && timeTo !== '' && hospital !== '') {
      var data = {
        day: date,
        availableFrom: timeFrom,
        availableTo: timeTo,
        hospital,
        id: props.user._id,
      };
      props.addAppointment(data, props.navigation);
    } else {
      Toast.showWithGravity('Please fill all fields!', Toast.LONG, Toast.TOP);
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <DateTimePicker
          fieldLabel={'Select Date'}
          onChangeHandler={(value) => onChangeHandler(value, setDate)}
          value={date}
        />
        <DateTimePicker
          fieldLabel={'Select Time From'}
          onChangeHandler={(value) => onChangeHandler(value, setTimeFrom)}
          value={timeFrom}
          mode="time"
        />
        <DateTimePicker
          fieldLabel={'Select Time To'}
          onChangeHandler={(value) => onChangeHandler(value, setTimeTo)}
          value={timeTo}
          mode="time"
        />
        <DropDown
          fieldLabel={'Select Hospital'}
          data={props.hospitals}
          onChangeHandler={(value) => onChangeHandler(value, setHospital)}
          value={hospital}
        />
        <AppButton
          onPress={() => onSubmit()}
          buttonMainContainerStyles={styles.buttonStyles}
          label={'Create'}
          loading={props.loading}
          buttonStyles={styles.buttonWidth}
        />
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {loading} = state.onSiteAppointmentState;
  const {user, hospitals} = state.doctorState;
  return {
    loading,
    user,
    hospitals,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  addAppointment: (data, navigation) => {
    dispatch(addAppointment(data, navigation));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddOfflineAppoutment);
