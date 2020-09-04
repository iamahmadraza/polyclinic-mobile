import {SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILED} from './constants';
import {polyclinicApi} from '../../Services';
import {Alert} from 'react-native';

export const SignUpDoctor = (data, navigation) => {
  return (dispatch) => {
    dispatch({type: SIGNUP});

    polyclinicApi
      .SignUp(data, {})
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: SIGNUP_SUCCESS});
          navigation.reset({
            routes: [{name: 'Login'}],
          });
        } else {
          dispatch({type: SIGNUP_FAILED});
        }
      })
      .catch((error) => {
        dispatch({type: SIGNUP_FAILED});
      });
  };
};
