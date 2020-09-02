import {GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED} from './constants';

const INITIAL_STATE = {
  error: '',
  loading: false,
  products: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, error: '', loading: true};
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        error: '',
        loading: false,
        taxons: action.taxons,
      };
    case GET_PRODUCTS_FAILED:
      return {...state, loading: false, error: action.message, taxons: []};
    default:
      return state;
  }
};
