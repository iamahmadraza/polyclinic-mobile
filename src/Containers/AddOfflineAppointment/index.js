import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '../../Components/DateTimePicker';
import AppButton from '../../Components/AppButton';
import Container from '../../Components/Container';
import styles from './styles';
import {connect} from 'react-redux';
import {addAppointment} from './actions';
import Toast from 'react-native-simple-toast';
import InputField from '../../Components/AppInputFieldWithLabel';

const AddOfflineAppoutment = (props) => {
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [hospital, setHospital] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  const onChangeHandler = (value, func) => {
    func(value);
  };

  const onChangeHospitals = (value) => {
    if (value === '') {
      setFilteredHospitals([]);
      return;
    }
    let hospitalsList = props.hospitals.filter((a) => a.name.includes(value));
    setFilteredHospitals([...hospitalsList]);
  };

  const onSubmit = () => {
    if (
      date !== '' &&
      timeFrom !== '' &&
      timeTo !== '' &&
      hospitalName !== ''
    ) {
      var data = {
        day: date,
        availableFrom: timeFrom,
        availableTo: timeTo,
        hospital,
        hospitalName,
        id: props.user._id,
      };
      props.addAppointment(data, props.navigation);
    } else {
      Toast.showWithGravity('Please fill all fields!', Toast.LONG, Toast.TOP);
    }
  };

  return (
    <Container>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
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
        <InputField
          fieldLabel={'Enter Hospital Name'}
          onChangeText={(text) => {
            onChangeHospitals(text);
            onChangeHandler(text, setHospitalName);
          }}
          value={hospitalName}
        />
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          style={styles.hospitalsListing}>
          {filteredHospitals.map((data) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setHospital(data._id);
                  setHospitalName(data.name);
                  setFilteredHospitals([]);
                }}
                key={data._id}
                style={styles.hospitalItem}>
                <Text style={styles.hospitalText}>{data.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <AppButton
          onPress={() => onSubmit()}
          buttonMainContainerStyles={styles.buttonStyles}
          label={'Create'}
          loading={props.loading}
          buttonStyles={styles.buttonWidth}
        />
      </KeyboardAwareScrollView>
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
