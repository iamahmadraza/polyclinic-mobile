import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import InputField from '../../Components/AppInputFieldWithLabel';
import DateTimePicker from '../../Components/DateTimePicker';
import AppButton from '../../Components/AppButton';
import {Images} from '../Utils';
import Container from '../../Components/Container';
import styles from './styles';
import {connect} from 'react-redux';
import DropDown from '../../Components/DropDown';

const AddOfflineAppoutment = (props) => {
  return (
    <Container>
      <View style={styles.container}>
        <DateTimePicker fieldLabel={'Select Date'} />
        <DateTimePicker fieldLabel={'Select Time From'} />
        <DateTimePicker fieldLabel={'Select Time To'} />
        <AppButton
          onPress={() =>
            props.navigation.reset({
              routes: [{name: 'Login'}],
            })
          }
          buttonMainContainerStyles={styles.buttonStyles}
          label={'Create'}
          buttonStyles={styles.buttonWidth}
        />
      </View>
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
