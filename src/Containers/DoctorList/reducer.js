import {
  GET_DOCTORS,
  GET_DOCTORS_FAILED,
  GET_DOCTORS_SUCCESS,
} from './constants';

const INITIAL_STATE = {
  loading: false,
  doctors: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return {...state, loading: true};
    case GET_DOCTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        doctors: action.doctors,
      };
    case GET_DOCTORS_FAILED:
      return {...state, loading: false};
    default:
      return state;
  }
};
