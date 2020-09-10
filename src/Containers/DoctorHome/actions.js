import {GET_SPECIALITIES, GET_HOSPITALS, SET_USER} from './constants';
import {polyclinicApi} from '../../Services';
import AsyncStorage from '@react-native-community/async-storage';

export const setUser = () => {
  return async (dispatch) => {
    var user = await AsyncStorage.getItem('user');
    dispatch({
      type: SET_USER,
      payload: JSON.parse(user),
    });
  };
};

export const getSpecialities = () => {
  return (dispatch) => {
    polyclinicApi.GetSpecialities().then((response) => {
      if (response.status === 200) {
        const {Data} = response.data;
        let specialities = [];
        Data.map((a) => {
          let s = {
            value: a._id,
            label: a.name,
          };
          specialities.push(s);
        });
        dispatch({
          type: GET_SPECIALITIES,
          payload: specialities,
          specialitiesFull: Data,
        });
      }
    });
  };
};

export const getHospitals = () => {
  return (dispatch) => {
    polyclinicApi.getHospitals().then((response) => {
      if (response.status === 200) {
        const {Data} = response.data;
        let hospitals = [];
        Data.map((a) => {
          let h = {
            value: a._id,
            label: a.name + '  -  ' + a.city,
          };
          hospitals.push(h);
        });
        dispatch({type: GET_HOSPITALS, payload: hospitals});
      }
    });
  };
};
