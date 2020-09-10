import {
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_FAILED,
} from './constants';
import {polyclinicApi} from '../../Services';
import Toast from 'react-native-simple-toast';

export const addAppointment = (data, navigation) => {
  return (dispatch) => {
    dispatch({type: ADD_APPOINTMENT});
    polyclinicApi
      .addOnSiteAppointment([data], data.id)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          Toast.showWithGravity(
            'Appointment Created Successfully!',
            Toast.LONG,
            Toast.TOP,
          );
          navigation.navigate('DoctorHome');
          dispatch({type: ADD_APPOINTMENT_SUCCESS});
        } else {
          Toast.showWithGravity('Something went wrong!', Toast.LONG, Toast.TOP);
          dispatch({type: ADD_APPOINTMENT_FAILED});
        }
      })
      .catch((error) => {
        Toast.showWithGravity('Something went wrong!', Toast.LONG, Toast.TOP);
        dispatch({type: ADD_APPOINTMENT_FAILED});
      });
  };
};
