import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import InputField from '../../Components/AppInputFieldWithLabel';
import DateTimePicker from '../../Components/DateTimePicker';
import {Images} from '../Utils';
import Container from '../../Components/Container';
import styles from './styles';
import {connect} from 'react-redux';

const AddOfflineAppoutment = (props) => {
  return (
    <Container>
      <DateTimePicker />
      <InputField
        containerStyles={styles.userNameInput}
        fieldLabel={'Enter Phone Number'}
        inputStyles={styles.inputStylesUsername}
        // onChangeText={(text) => onChangeHandler(text, setUserName)}
        // errorText={userNameError}
        // value={userName}
      />
      <InputField
        containerStyles={styles.userNameInput}
        fieldLabel={'Enter Phone Number'}
        inputStyles={styles.inputStylesUsername}
        // onChangeText={(text) => onChangeHandler(text, setUserName)}
        // errorText={userNameError}
        // value={userName}
      />
      <InputField
        fieldLabel={'Enter Phone Number'}
        // onChangeText={(text) => onChangeHandler(text, setUserName)}
        // errorText={userNameError}
        // value={userName}
      />
      <InputField
        fieldLabel={'Enter Phone Number'}

        // onChangeText={(text) => onChangeHandler(text, setUserName)}
        // errorText={userNameError}
        // value={userName}
      />
      <InputField
        fieldLabel={'Enter Phone Number'}
        // onChangeText={(text) => onChangeHandler(text, setUserName)}
        // errorText={userNameError}
        // value={userName}
      />
      <InputField
        containerStyles={styles.userNameInput}
        fieldLabel={'Enter Phone Number'}
        inputStyles={styles.inputStylesUsername}
        // onChangeText={(text) => onChangeHandler(text, setUserName)}
        // errorText={userNameError}
        // value={userName}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  // const {loading, error, taxons} = state.homeState;
  return {
    // loading,
    // error,
    // taxons,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddOfflineAppoutment);
