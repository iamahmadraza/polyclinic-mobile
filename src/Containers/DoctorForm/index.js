import React, {useState} from 'react';
import InputField from '../../Components/AppInputFieldWithLabel';
import DropDown from '../../Components/DropDown';
import DatePicker from '../../Components/DateTimePicker';
import Container from '../../Components/Container';
import styles from './styles';
import {connect} from 'react-redux';
import {updateProfile} from './actions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../../Components/AppButton';
import Toast from 'react-native-simple-toast';

const DoctorForm = (props) => {
  const {user} = props;
  const [speciality, setSpeciality] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState(user.city ? user.city : '');
  const [degree, setDegree] = useState(
    user.qualiflication ? user.qualiflication : '',
  );
  const [completionDate, setCompletionDate] = useState(
    user.degreeCompletionYear ? user.degreeCompletionYear : '',
  );
  const [institue, setInstitue] = useState(user.institue ? user.institue : '');
  const [practiceStartDate, setPracticeStartDate] = useState(
    user.practiceDate ? user.practiceDate : '',
  );
  const [experience, setExperience] = useState(
    user.workExperince ? user.workExperince : '',
  );
  const [service, setService] = useState(user.services ? user.services : '');

  const onChangeHandler = (value, func) => {
    func(value);
  };

  const onSubmit = () => {
    if (speciality !== '') {
      var data = {
        doctor: props.user._id,
        speciality: [speciality],
        // gender: 'Male',
        state: province,
        city: city,
        practiceGrowth: 'Practice Growth',
        managePractice: experience,
        workExperince: experience,
        qualiflication: degree,
        institute: institue,
        degreeCompletionYear: completionDate,
        services: service,
        practiceDate: practiceStartDate,
      };
      props.updateProfile(data);
    } else {
      Toast.showWithGravity('Please select speciality!', Toast.LONG, Toast.TOP);
    }
  };

  return (
    <Container>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <DropDown
          fieldLabel={'Select Speciality'}
          data={props.specialites}
          onChangeHandler={(value) => onChangeHandler(value, setSpeciality)}
          value={speciality}
        />
        <InputField
          containerStyles={styles.userNameInput}
          fieldLabel={'Enter Province Name'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) => onChangeHandler(text, setProvince)}
          value={province}
        />
        <InputField
          containerStyles={styles.userNameInput}
          fieldLabel={'Enter City'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) => onChangeHandler(text, setCity)}
          value={city}
        />
        <InputField
          containerStyles={styles.userNameInput}
          fieldLabel={'Enter Degree/Followship'}
          onChangeText={(text) => onChangeHandler(text, setDegree)}
          value={degree}
        />
        <DatePicker
          fieldLabel={'Degree Completion Date'}
          onChangeHandler={(value) => onChangeHandler(value, setCompletionDate)}
          value={completionDate}
        />
        <InputField
          fieldLabel={'Enter Instituate'}
          onChangeText={(text) => onChangeHandler(text, setInstitue)}
          value={institue}
        />
        <DatePicker
          fieldLabel={'Select Practice Start Date'}
          onChangeHandler={(value) =>
            onChangeHandler(value, setPracticeStartDate)
          }
          value={practiceStartDate}
        />
        <InputField
          fieldLabel={'Enter Experience'}
          onChangeText={(text) => onChangeHandler(text, setExperience)}
          value={experience}
        />
        <InputField
          fieldLabel={'Enter Service You Provide'}
          onChangeText={(text) => onChangeHandler(text, setService)}
          value={service}
        />
        <AppButton
          loading={props.loading}
          onPress={() => onSubmit()}
          buttonMainContainerStyles={styles.loginButtonStyles}
          label={'Update'}
        />
      </KeyboardAwareScrollView>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const {specialites, user} = state.doctorState;
  const {loading} = state.doctorFormState;

  return {
    specialites,
    loading,
    user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  updateProfile: (data) => {
    dispatch(updateProfile(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorForm);
