import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import AppButton from '../../Components/AppButton';
import styles from './styles';
import {connect} from 'react-redux';
import {getSpecialities, getHospitals, setUser} from './actions';
import AsyncStorage from '@react-native-community/async-storage';

const DoctorHome = (props) => {
  useEffect(() => {
    props.getSpecialities();
    props.getHospitals();
    props.setUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <AppButton
          onPress={() => props.navigation.navigate('Profile')}
          buttonMainContainerStyles={styles.buttonStyles}
          buttonStyles={styles.buttonWidth}
          label={'Profile'}
        />
        <AppButton
          onPress={() => props.navigation.navigate('OnlineAppointment')}
          buttonMainContainerStyles={styles.buttonStyles}
          label={'Create Online Appointment'}
          buttonStyles={styles.buttonWidth}
        />
        <AppButton
          onPress={() => props.navigation.navigate('OfflineAppointment')}
          buttonMainContainerStyles={styles.buttonStyles}
          label={'Create Offline Appointment'}
          buttonStyles={styles.buttonWidth}
        />
        <AppButton
          onPress={() => alert('Coming Soon')}
          buttonMainContainerStyles={styles.buttonStyles}
          label={'My Appointments'}
          buttonStyles={styles.buttonWidth}
        />
        <AppButton
          onPress={() => {
            AsyncStorage.removeItem('accessToken');
            AsyncStorage.removeItem('role');
            AsyncStorage.removeItem('user');
            props.navigation.reset({
              routes: [{name: 'Login'}],
            });
          }}
          buttonMainContainerStyles={styles.buttonStyles}
          label={'Logout'}
          buttonStyles={styles.buttonWidth}
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
  getSpecialities: () => {
    dispatch(getSpecialities());
  },
  getHospitals: () => {
    dispatch(getHospitals());
  },
  setUser: () => {
    dispatch(setUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorHome);
