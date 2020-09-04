import {SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILED} from './constants';

const INITIAL_STATE = {
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {...state, error: '', loading: true};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
      };
    case SIGNUP_FAILED:
      return {...state, loading: false};
    default:
      return state;
  }
};
