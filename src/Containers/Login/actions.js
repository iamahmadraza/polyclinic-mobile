import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from './constants';
import {polyclinicApi} from '../../Services';
import AsyncStorage from '@react-native-community/async-storage';
import {Role} from '../Utils/Constants';

export const patientLogin = (data, navigation) => {
  return (dispatch) => {
    dispatch({type: LOGIN});
    polyclinicApi
      .PatientLogin(data, {})
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({type: LOGIN_SUCCESS, user: response.data.user});
          let token = response.data.access_token;
          polyclinicApi.setHeaderWithToken(response.data.access_token);
          AsyncStorage.setItem('accessToken', JSON.stringify(token));
          AsyncStorage.setItem('role', Role.Patient);
          navigation.reset({
            routes: [{name: 'Patient'}],
          });
        } else {
          dispatch({type: LOGIN_FAILED, message: response.data.message});
        }
      })
      .catch((error) => {
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
          let token = response.data.access_token;
          polyclinicApi.setHeaderWithToken(response.data.access_token);
          AsyncStorage.setItem('accessToken', JSON.stringify(token));
          AsyncStorage.setItem('role', Role.Doctor);
          navigation.reset({
            routes: [{name: 'Doctor'}],
          });
        } else {
          dispatch({type: LOGIN_FAILED, message: response.data.message});
        }
      })
      .catch((error) => {
        dispatch({type: LOGIN_FAILED, message: error});
      });
  };
};
