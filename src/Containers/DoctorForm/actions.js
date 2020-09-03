import {GET_TAXONS, GET_TAXONS_SUCCESS, GET_TAXONS_FAILED} from './constants';
import {MedApi} from '../../Services';

export const GetTaxons = () => {
  return (dispatch) => {
    dispatch({type: GET_TAXONS});
    MedApi.TaxonsList()
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          let section = [];
          response.data.taxons.map((t) => {
            if (t.taxons.length > 0) {
              section.push({
                id: t.id,
                title: t.name,
                content: [],
              });
            } else {
              section.map((s) => {
                if (s.id === t.parent_id) {
                  s.content = [...s.content, {...t}];
                }
              });
            }
          });
          dispatch({type: GET_TAXONS_SUCCESS, taxons: section});
        } else {
          dispatch({type: GET_TAXONS_FAILED, message: 'Something went wrong!'});
        }
      })
      .catch((error) => {
        dispatch({type: GET_TAXONS_FAILED, message: error});
      });
  };
};
