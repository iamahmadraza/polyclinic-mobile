import {
  GET_DOCTORS,
  GET_DOCTORS_SUCCESS,
  GET_DOCTORS_FAILED,
} from './constants';
import {polyclinicApi} from '../../services';

export const getProducts = (query) => {
  return (dispatch) => {
    dispatch({type: GET_DOCTORS});
    polyclinicApi
      .DoctoBySpeciality(query)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          dispatch({type: GET_DOCTORS_SUCCESS, doctors: response.data});
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
