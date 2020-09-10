import {
  ADD_APPOINTMENTS,
  ADD_APPOINTMENTS_SUCCESS,
  ADD_APPOINTMENTS_FAILED,
} from './constants';
import {polyclinicApi} from '../../Services';
import Toast from 'react-native-simple-toast';

export const bookAppointment = (data, navigation) => {
  return (dispatch) => {
    dispatch({type: ADD_APPOINTMENTS});
    polyclinicApi
      .bookAppointment(data)
      .then((response) => {
        if (response.status === 200) {
          Toast.showWithGravity(
            'You have successfully set appointment!',
            Toast.LONG,
            Toast.TOP,
          );
          navigation.navigate('DoctorList');
          dispatch({type: ADD_APPOINTMENTS_SUCCESS});
        } else {
          Toast.showWithGravity('Something went wrong!', Toast.LONG, Toast.TOP);
          dispatch({
            type: ADD_APPOINTMENTS_FAILED,
          });
        }
      })
      .catch((error) => {
        Toast.showWithGravity('Something went wrong!', Toast.LONG, Toast.TOP);
        dispatch({type: ADD_APPOINTMENTS_FAILED});
      });
  };
};
