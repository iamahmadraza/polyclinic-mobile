import apisauce from 'apisauce';
// import {BASE_URL} from 'react-native-dotenv';

const baseURL = 'google.com';

const api = apisauce.create({
  baseURL,
  headers: {
    'X-Spree-Token': 'f01af7fa5cdc3ccdf0088a23a8ede4faf2b68697e27bdff4',
  },
  timeout: 1000 * 60,
});

const setHeaderWithToken = (token) => {
  if (token) {
    api.setHeader('Authorization', 'Bearer ' + token);
  }
};

const Login = (body) =>
  api.post(
    `/spree_oauth/token?username=${body.email}&password=${body.password}&grant_type=password`,
    {},
  );
const TaxonsList = () => api.get('/api/v2/taxons', {});
const ProductLst = (path) => api.get(`/t/${path}`, {});

export default {
  setHeaderWithToken,
  Login,
  TaxonsList,
  ProductLst,
};
