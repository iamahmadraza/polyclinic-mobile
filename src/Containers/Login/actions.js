import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from './constants';
import {MedApi} from '../../Service';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const UserLogin = (data, navigation) => {
  return dispatch => {
    dispatch({type: LOGIN});
    MedApi.Login(data, {})
      .then(response => {
        if (response.status === 200) {
          dispatch({type: LOGIN_SUCCESS, user: response.data.user});
          let token = response.data.access_token;
          MedApi.setHeaderWithToken(response.data.access_token);
          AsyncStorage.setItem('accessToken', JSON.stringify(token));
          navigation.reset({
            routes: [{name: 'Auth'}],
          });
        } else {
          dispatch({type: LOGIN_FAILED, message: response.data.message});
        }
      })
      .catch(error => {
        dispatch({type: LOGIN_FAILED, message: error});
      });
  };
};
