import React from 'react';
import {View, SafeAreaView} from 'react-native';
import AppButton from '../../Components/AppButton';
import ScreenHeading from '../../Components/ScreenHeading';
import styles from './styles';
import {connect} from 'react-redux';
import {setRole} from './actions';
import {Role} from '../Utils/Constants';

const Category = (props) => {
  const setRoleFunc = (data) => {
    props.setRole(data);
    props.navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScreenHeading name="Please Select Role" />
        <AppButton
          onPress={() => setRoleFunc(Role.Doctor)}
          buttonMainContainerStyles={styles.buttonStyles}
          label={'Doctor'}
        />
        <AppButton
          onPress={() => setRoleFunc(Role.Patient)}
          buttonMainContainerStyles={styles.buttonStyles}
          label={'Patient'}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  setRole: (data) => {
    dispatch(setRole(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
