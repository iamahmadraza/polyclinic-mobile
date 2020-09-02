import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from './constants';

const INITIAL_STATE = {
  error: '',
  loading: false,
  user: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('CALLELLD')
      return {...state, error: '', loading: true};
    case LOGIN_SUCCESS:
      console.log('CALLELLD2')
      return {
        ...state,
        error: '',
        loading: false,
        user: action.user,
      };
    case LOGIN_FAILED:
      console.log('CALLELLd3')
      return {...state, loading: false, error: action.message};
    default:
      return state;
  }
};
