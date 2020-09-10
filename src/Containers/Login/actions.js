import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from './constants';
import {polyclinicApi} from '../../Services';
import AsyncStorage from '@react-native-community/async-storage';
import {Role} from '../Utils/Constants';
import Toast from 'react-native-simple-toast';

export const patientLogin = (data, navigation) => {
  return (dispatch) => {
    dispatch({type: LOGIN});
    polyclinicApi
      .PatientLogin(data, {})
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: LOGIN_SUCCESS, user: response.data.patient});
          let token = response.data.token;
          polyclinicApi.setHeaderWithToken(response.data.token);
          AsyncStorage.setItem('accessToken', JSON.stringify(token));
          AsyncStorage.setItem('role', Role.Patient);
          AsyncStorage.setItem('user', JSON.stringify(response.data.Patient));
          navigation.reset({
            routes: [{name: 'Patient'}],
          });
        } else {
          Toast.showWithGravity(response.data.Message, Toast.LONG, Toast.TOP);
          dispatch({type: LOGIN_FAILED, message: response.data.message});
        }
      })
      .catch((error) => {
        Toast.showWithGravity('Something went wrong', Toast.LONG, Toast.TOP);
        dispatch({type: LOGIN_FAILED, message: error});
      });
  };
};

export const doctorLogin = (data, navigation) => {
  return (dispatch) => {
    dispatch({type: LOGIN});
    polyclinicApi
      .DoctorLogin(data, {})
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: LOGIN_SUCCESS, user: response.data.user});
          let token = response.data.token;
          polyclinicApi.setHeaderWithToken(response.data.token);
          AsyncStorage.setItem('accessToken', JSON.stringify(token));
          AsyncStorage.setItem('role', Role.Doctor);
          AsyncStorage.setItem('user', JSON.stringify(response.data.doctor));
          navigation.reset({
            routes: [{name: 'Doctor'}],
          });
        } else {
          Toast.showWithGravity(response.data.Message, Toast.LONG, Toast.TOP);
          dispatch({type: LOGIN_FAILED, message: response.data.message});
        }
      })
      .catch((error) => {
        Toast.showWithGravity('Something went wrong', Toast.LONG, Toast.TOP);
        dispatch({type: LOGIN_FAILED, message: error});
      });
  };
};
