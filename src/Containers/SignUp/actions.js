import {SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILED} from './constants';
import {polyclinicApi} from '../../Services';
import Toast from 'react-native-simple-toast';

export const signUpDoctor = (data, navigation) => {
  return (dispatch) => {
    dispatch({type: SIGNUP});
    polyclinicApi
      .SignUpDoc(data, {})
      .then((response) => {
        if (response.status === 200) {
          Toast.showWithGravity(
            'You have successfully Signup!',
            Toast.LONG,
            Toast.TOP,
          );
          dispatch({type: SIGNUP_SUCCESS});
          navigation.reset({
            routes: [{name: 'Login'}],
          });
        } else {
          Toast.showWithGravity(response.data.Message, Toast.LONG, Toast.TOP);
          dispatch({type: SIGNUP_FAILED});
        }
      })
      .catch((error) => {
        Toast.showWithGravity('Something went wrong!', Toast.LONG, Toast.TOP);
        dispatch({type: SIGNUP_FAILED});
      });
  };
};

export const signUpPatient = (data, navigation) => {
  return (dispatch) => {
    dispatch({type: SIGNUP});
    polyclinicApi
      .SignUpPatient(data, {})
      .then((response) => {
        if (response.status === 200) {
          Toast.showWithGravity(
            'You have successfully Signup!',
            Toast.LONG,
            Toast.TOP,
          );
          dispatch({type: SIGNUP_SUCCESS});
          navigation.reset({
            routes: [{name: 'Login'}],
          });
        } else {
          Toast.showWithGravity(response.data.Message, Toast.LONG, Toast.TOP);
          dispatch({type: SIGNUP_FAILED});
        }
      })
      .catch((error) => {
        Toast.showWithGravity('Something went wrong!', Toast.LONG, Toast.TOP);
        dispatch({type: SIGNUP_FAILED});
      });
  };
};
