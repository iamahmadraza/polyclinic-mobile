import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppInputField from '../../Components/AppInputField/index';
import AppButton from '../../Components/AppButton';
import ScreenHeading from '../../Components/ScreenHeading';
import styles from './styles';
import {connect} from 'react-redux';
import {signUpDoctor, signUpPatient} from './actions';
import {Validation} from '../Utils';
import {Role} from '../Utils/Constants';

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pmdc, setPMDC] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [pmdcError, setPMDCError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const onChangeHandler = (text, func, errorFunc) => {
    func(text);
    errorFunc('');
  };

  const validationCheck = (errorType) => {
    setEmailError(Validation.ValidateEmail(email));
    setPasswordError(Validation.ValidatePassword(password));
    setNameError(Validation.ValidateEmpty(name));
    setPMDCError(Validation.ValidateEmpty(pmdc));
    setPhoneNumberError(Validation.ValidateEmpty(phoneNumber));
    setConfirmPasswordError(Validation.ValidateEmpty(confirmPassword));
    if (
      emailError === '' &&
      passwordError === '' &&
      nameError === '' &&
      phoneNumberError === '' &&
      confirmPasswordError === ''
    ) {
      if (props.role === Role.Doctor) {
        return pmdcError === '';
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const onSubmit = async () => {
    const body = {
      email,
      phone: phoneNumber,
      usename: name,
      password,
    };
    if (validationCheck()) {
      if (confirmPassword === password) {
        setConfirmPasswordError('');
        if (props.role === Role.Doctor) {
          body.PMDC = pmdc;
          props.signUpDoctor(body, props.navigation);
        } else {
          props.signUpPatient(body, props.navigation);
        }
      } else {
        setConfirmPasswordError('Password not matched!');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0061ff" barStyle="light-content" />
      <ScreenHeading name="Sign Up" />
      <KeyboardAwareScrollView contentContainerStyle={styles.innerContainer}>
        <AppInputField
          containerStyles={styles.input}
          fieldLabel={'Enter Name'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) => onChangeHandler(text, setName, setNameError)}
          errorText={nameError}
          value={name}
        />
        <AppInputField
          containerStyles={[styles.input, styles.marginTop]}
          fieldLabel={'Enter Phone Number'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) =>
            onChangeHandler(text, setPhoneNumber, setPhoneNumberError)
          }
          errorText={phoneNumberError}
          value={phoneNumber}
        />
        <AppInputField
          containerStyles={[styles.input, styles.marginTop]}
          fieldLabel={'Enter Email'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) =>
            onChangeHandler(text, setEmail, setEmailError)
          }
          errorText={emailError}
          value={email}
        />
        {props.role === Role.Doctor && (
          <AppInputField
            containerStyles={[styles.input, styles.marginTop]}
            fieldLabel={'Enter PMDC'}
            inputStyles={styles.inputStylesUsername}
            onChangeText={(text) =>
              onChangeHandler(text, setPMDC, setPMDCError)
            }
            errorText={pmdcError}
            value={pmdc}
          />
        )}
        <AppInputField
          containerStyles={[styles.input, styles.marginTop]}
          fieldLabel={'Enter Password'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) =>
            onChangeHandler(text, setPassword, setPasswordError)
          }
          errorText={passwordError}
          value={password}
          secureTextEntry={true}
        />
        <AppInputField
          containerStyles={[styles.input, styles.marginTop]}
          fieldLabel={'Confirm Password'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) =>
            onChangeHandler(text, setConfirmPassword, setConfirmPasswordError)
          }
          errorText={confirmPasswordError}
          value={confirmPassword}
          secureTextEntry={true}
        />
        <AppButton
          loading={props.loading}
          onPress={() => onSubmit()}
          buttonMainContainerStyles={styles.loginButtonStyles}
          label={'Sign Up'}
        />
        <View style={styles.signUpTextContainer}>
          <Text style={styles.textStyle}>Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const {role} = state.roleState;
  const {loading} = state.signUpState;
  return {
    role,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  signUpDoctor: (data, navigation) => {
    dispatch(signUpDoctor(data, navigation));
  },
  signUpPatient: (data, navigation) => {
    dispatch(signUpPatient(data, navigation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
