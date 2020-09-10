import {SET_ROLE} from './constants';

export const setRole = (data) => {
  return (dispatch) => {
    dispatch({type: SET_ROLE, payload: data});
  };
};
