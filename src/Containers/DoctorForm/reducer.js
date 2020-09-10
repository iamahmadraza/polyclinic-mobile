import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from './constants';

const INITIAL_STATE = {
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {...state, loading: true};
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_PROFILE_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
};
