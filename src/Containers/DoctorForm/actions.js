import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from './constants';
import {polyclinicApi} from '../../Services';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';

export const updateProfile = (data) => {
  return (dispatch) => {
    dispatch({type: UPDATE_PROFILE});
    polyclinicApi
      .updateProfileDoc(data)
      .then((response) => {
        if (response.status === 200) {
          AsyncStorage.setItem('user', JSON.stringify(response.data.Data));
          Toast.showWithGravity('Updated Successfully!', Toast.LONG, Toast.TOP);
          dispatch({type: UPDATE_PROFILE_SUCCESS, payload: response.data});
        } else {
          Toast.showWithGravity('Something went wrong!', Toast.LONG, Toast.TOP);
          dispatch({
            type: UPDATE_PROFILE_FAIL,
          });
        }
      })
      .catch((error) => {
        Toast.showWithGravity('Something went wrong!', Toast.LONG, Toast.TOP);
        dispatch({type: UPDATE_PROFILE_FAIL});
      });
  };
};
