import {ADD_APPOINTMENT} from '../AddOfflineAppointment/constants';
import {
  ADD_APPOINTMENTS,
  ADD_APPOINTMENTS_SUCCESS,
  ADD_APPOINTMENTS_FAILED,
} from './constants';

const INITIAL_STATE = {
  loading: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_APPOINTMENTS:
      return {...state, loading: true};
    case ADD_APPOINTMENTS_SUCCESS:
      return {...state, loading: false};
    case ADD_APPOINTMENTS_FAILED:
      return {...state, loading: false};
    default:
      return state;
  }
};
