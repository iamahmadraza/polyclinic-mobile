import {SET_ROLE} from './constants';

const INITIAL_STATE = {
  role: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ROLE:
      return {...state, role: action.payload};
    default:
      return state;
  }
};
