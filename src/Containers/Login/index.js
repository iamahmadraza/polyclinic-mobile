import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppInputField from '../../Components/AppInputField/index';
import AppButton from '../../Components/AppButton';
import ScreenHeading from '../../Components/ScreenHeading';
import styles from './styles';
import {connect} from 'react-redux';
import {patientLogin, doctorLogin} from './actions';
import {Validation} from '../Utils';
import {Role} from '../Utils/Constants';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const onChangeHandler = (text, func, errorFunc) => {
    func(text);
    errorFunc('');
  };

  const validationCheck = () => {
    setEmailError(Validation.ValidateEmail(email));
    setPasswordError(Validation.ValidatePassword(password));
    setPhoneNumberError(Validation.ValidateEmpty(phoneNumber));
    if (passwordError === '') {
      if (props.role === Role.Doctor) {
        if (phoneNumberError === '') {
          return true;
        } else {
          return false;
        }
      } else {
        if (emailError === '') {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  };

  const onSubmit = async () => {
    if (validationCheck()) {
      if (props.role === Role.Doctor) {
        let data = {
          phoneNumber,
          password,
        };
        props.doctorLogin(data, props.navigation);
      } else {
        let data = {
          email,
          password,
        };
        props.patientLogin(data, props.navigation);
      }
    }
  };

  const forgotPassword = () => {
    console.log('No implemented Yet');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeading name="Sign In" />
      <KeyboardAwareScrollView contentContainerStyle={styles.innerContainer}>
        {props.role === Role.Doctor ? (
          <AppInputField
            containerStyles={styles.userNameInput}
            fieldLabel={'Enter Phone Number'}
            inputStyles={styles.inputStylesUsername}
            onChangeText={(text) =>
              onChangeHandler(text, setPhoneNumber, setPhoneNumberError)
            }
            errorText={phoneNumberError}
            value={phoneNumber}
          />
        ) : (
          <AppInputField
            containerStyles={styles.userNameInput}
            fieldLabel={'Enter Email'}
            inputStyles={styles.inputStylesUsername}
            onChangeText={(text) =>
              onChangeHandler(text, setEmail, setEmailError)
            }
            errorText={emailError}
            value={email}
          />
        )}
        <AppInputField
          inputStyles={styles.inputStylesPassword}
          onChangeText={(text) =>
            onChangeHandler(text, setPassword, setPasswordError)
          }
          fieldLabel={'Enter Password'}
          errorText={passwordError}
          secureTextEntry={true}
          value={password}
        />
        <AppButton
          loading={props.loading}
          onPress={() => onSubmit()}
          buttonMainContainerStyles={styles.loginButtonStyles}
          label={'Sign In'}
        />
        <TouchableOpacity onPress={() => forgotPassword()}>
          <Text style={styles.textStyle}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.signUpTextContainer}>
          <Text style={styles.textStyle}>Do you have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const {role} = state.roleState;
  const {loading} = state.loginState;
  return {
    role,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  patientLogin: (data, navigation) => {
    dispatch(patientLogin(data, navigation));
  },
  doctorLogin: (data, navigation) => {
    dispatch(doctorLogin(data, navigation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
