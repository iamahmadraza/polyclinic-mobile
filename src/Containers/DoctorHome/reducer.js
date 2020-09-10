import {GET_SPECIALITIES, GET_HOSPITALS, SET_USER} from './constants';

const INITIAL_STATE = {
  specialites: [],
  specialitiesFull: [],
  hospitals: [],
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SPECIALITIES:
      return {
        ...state,
        specialites: action.payload,
        specialitiesFull: action.specialitiesFull,
      };
    case GET_HOSPITALS:
      return {...state, hospitals: action.payload};
    case SET_USER:
      return {...state, user: {...action.payload}};
    default:
      return state;
  }
};
