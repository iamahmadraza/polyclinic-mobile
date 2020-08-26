import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AppInputField from '../../Components/AppInputField/index';
import AppButton from '../../Components/AppButton';
import styles from './styles';
import { connect } from 'react-redux';
import { UserLogin } from './actions';
import { Validation } from '../utils';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'iamahmadraaza@gmail.com',
      password: 'password',
      userNameError: '',
      passError: '',
    };
  }

  onChangeUserName = async text => {
    this.setState({
      userName: text,
    });
  };
  onChangePassword = async text => {
    this.setState({
      password: text,
    });
  };

  validationCheck = text => {
    let errorType = text;

    switch (errorType) {
      case 'username':
        this.setState({
          userNameError: Validation.Email(this.state.userName),
        });
        break;
      case 'password':
        this.setState({
          passError: Validation.Password(this.state.password),
        });
        break;
      default:
        this.setState({
          userNameError: Validation.Email(this.state.userName),
          passError: Validation.Password(this.state.password),
        });
    }
  };

  onSubmit = async () => {
    await this.validationCheck('password');
    await this.validationCheck('username');
    const {userNameError, passError} = this.state;
    if (userNameError === '' && passError === '') {
      let formData = {
        email: this.state.userName,
        password: this.state.password,
      };
      this.props.authorizeLogin(formData, this.props.navigation);
    }
  };

  forgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword', {});
  };

  render() {
    console.log(this.props.loading, "IS LOADING")
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar backgroundColor="#0061ff" barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={{color: 'white', fontSize: 40}}>Al-Rahma</Text>
          </View>
          <AppInputField
            containerStyles={styles.userNameInput}
            fieldLabel={'Username'}
            inputStyles={styles.inputStylesUsername}
            onChangeText={text => this.onChangeUserName(text)}
            errorText={this.state.userNameError}
            value={this.state.userName}
          />
          <AppInputField
            inputStyles={styles.inputStylesPassword}
            onChangeText={text => this.onChangePassword(text)}
            fieldLabel={'Password'}
            errorText={this.state.passError}
            secureTextEntry={true}
          />
          <AppButton
            loading={this.props.loading}
            onPress={() => this.onSubmit()}
            buttonMainContainerStyles={
              this.props.error !== ''
                ? styles.loginButtonStylesWithError
                : styles.loginButtonStyles
            }
            label={'Login'}
          />
          {this.props.error !== '' && (
            <Text style={styles.errorTextLogin}>{this.props.error}</Text>
          )}
          <TouchableOpacity onPress={() => this.forgotPassword()}>
            <Text style={styles.forgotTextStyles}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => {
  const {loading, error, user} = state.loginState;
  return {
    loading,
    error,
    user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  authorizeLogin: (data, navigation) => {
    dispatch(UserLogin(data, navigation));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
