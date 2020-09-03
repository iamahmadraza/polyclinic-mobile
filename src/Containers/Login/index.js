import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppInputField from '../../Components/AppInputField/index';
import AppButton from '../../Components/AppButton';
import ScreenHeading from '../../Components/ScreenHeading';
import styles from './styles';
import {connect} from 'react-redux';
import {UserLogin} from './actions';
import {Validation} from '../Utils';
import {Role} from '../Utils/Constants';

const Login = (props) => {
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
    props.navigation.reset({
      routes: [{name: props.role === Role.Patient ? 'Patient' : 'Doctor'}],
    });
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

  const forgotPassword = () => {
    props.navigation.navigate('ForgotPassword', {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeading name="Sign In" />
      <KeyboardAwareScrollView contentContainerStyle={styles.innerContainer}>
        <AppInputField
          containerStyles={styles.userNameInput}
          fieldLabel={'Enter Phone Number'}
          inputStyles={styles.inputStylesUsername}
          onChangeText={(text) => onChangeHandler(text, setUserName)}
          errorText={userNameError}
          value={userName}
        />
        <AppInputField
          inputStyles={styles.inputStylesPassword}
          onChangeText={(text) => onChangeHandler(text, setPassword)}
          fieldLabel={'Enter Password'}
          errorText={passError}
          secureTextEntry={true}
        />
        <AppButton
          // loading={props.loading}
          onPress={() => onSubmit()}
          buttonMainContainerStyles={
            // props.error !== ''
            // ? styles.loginButtonStylesWithError
            styles.loginButtonStyles
          }
          label={'Sign In'}
        />
        {props.error !== '' && (
          <Text style={styles.errorTextLogin}>{props.error}</Text>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
