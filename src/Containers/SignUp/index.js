import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
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
import {UserLogin} from './actions';
import {Validation} from '../Utils';

import {Role} from '../Utils/Constants';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passError, setPassError] = useState('');

  const onChangeHandler = (text, func) => {
    func(text);
  };

  const validationCheck = (text) => {
    let errorType = text;

    switch (errorType) {
      case 'username':
        setUserNameError(Validation.Email(userName));
        break;
      case 'password':
        setPassError(Validation.Password(password));
        break;
      default:
        setUserNameError(Validation.Email(userName));
        setPassError(Validation.Password(password));
    }
  };

  const onSubmit = async () => {
    // await validationCheck('password');
    // await validationCheck('username');
    // if (userNameError === '' && passError === '') {
    //   let formData = {
    //     email: userName,
    //     password: password,
    //   };
    //   props.authorizeLogin(formData, props.navigation);
    // }
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
          onChangeText={(text) => onChangeHandler(text, setUserName)}
          errorText={userNameError}
          value={userName}
        />
        <AppInputField
          containerStyles={[styles.input, styles.marginTop]}
          fieldLabel={'Enter Phone Number'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) => onChangeHandler(text, setUserName)}
          errorText={userNameError}
          value={userName}
        />
        <AppInputField
          containerStyles={[styles.input, styles.marginTop]}
          fieldLabel={'Enter Email'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) => onChangeHandler(text, setUserName)}
          errorText={userNameError}
          value={userName}
        />
        {props.role === Role.Doctor && (
          <AppInputField
            containerStyles={[styles.input, styles.marginTop]}
            fieldLabel={'Enter PMDC'}
            inputStyles={styles.inputStylesUsername}
            onChangeText={(text) => onChangeHandler(text, setUserName)}
            errorText={userNameError}
            value={userName}
          />
        )}
        <AppInputField
          containerStyles={[styles.input, styles.marginTop]}
          fieldLabel={'Enter Password'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) => onChangeHandler(text, setUserName)}
          errorText={userNameError}
          value={userName}
        />
        <AppInputField
          containerStyles={[styles.input, styles.marginTop]}
          fieldLabel={'Confirm Password'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) => onChangeHandler(text, setUserName)}
          errorText={userNameError}
          value={userName}
        />
        <AppButton
          loading={props.loading}
          onPress={() => onSubmit()}
          buttonMainContainerStyles={styles.loginButtonStyles}
          label={'Sign Up'}
        />
        {/* {props.error !== '' && (
          <Text style={styles.errorTextLogin}>{props.error}</Text>
        )} */}
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
  return {
    role,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  authorizeLogin: (data, navigation) => {
    dispatch(UserLogin(data, navigation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
