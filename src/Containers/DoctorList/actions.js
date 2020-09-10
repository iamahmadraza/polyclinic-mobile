import {
  GET_DOCTORS,
  GET_DOCTORS_SUCCESS,
  GET_DOCTORS_FAILED,
} from './constants';
import {polyclinicApi} from '../../Services';

export const getDoctor = (query) => {
  return (dispatch) => {
    dispatch({type: GET_DOCTORS});
    polyclinicApi
      .DoctoBySpeciality(query)
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: GET_DOCTORS_SUCCESS, doctors: response.data.Data});
        } else {
          dispatch({
            type: GET_DOCTORS_FAILED,
          });
        }
      })
      .catch((error) => {
        dispatch({type: GET_DOCTORS_FAILED});
      });
  };
};
