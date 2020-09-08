import {GET_TAXONS, GET_TAXONS_SUCCESS, GET_TAXONS_FAILED} from './constants';

const INITIAL_STATE = {
  error: '',
  loading: false,
  taxons: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TAXONS:
      return {...state, error: '', loading: true};
    case GET_TAXONS_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        taxons: action.taxons,
      };
    case GET_TAXONS_FAILED:
      return {...state, loading: false, error: action.message, taxons: []};
    default:
      return state;
  }
};
