import {
  ADD_APPOINTMENT,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_FAILED,
} from './constants';

const INITIAL_STATE = {
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return {...state, error: '', loading: true};
    case ADD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
      };
    case ADD_APPOINTMENT_FAILED:
      return {...state, loading: false, error: action.message};
    default:
      return state;
  }
};
