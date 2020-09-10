import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
} from './constants';
import {MedApi} from '../../services';

export const getProducts = (path) => {
  return (dispatch) => {
    dispatch({type: GET_PRODUCTS});
    MedApi.ProductLst(path)
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: GET_PRODUCTS_SUCCESS, taxons: response.data});
        } else {
          dispatch({
            type: GET_PRODUCTS_FAILED,
            message: 'Something went wrong!',
          });
        }
      })
      .catch((error) => {
        dispatch({type: GET_PRODUCTS_FAILED, message: error});
      });
  };
};
