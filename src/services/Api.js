import apisauce from 'apisauce';
// import {BASE_URL} from 'react-native-dotenv';

const baseURL = 'google.com';

const api = apisauce.create({
  baseURL,
  timeout: 1000 * 60,
});

const setHeaderWithToken = (token) => {
  if (token) {
    api.setHeader('Authorization', 'Bearer ' + token);
  }
};

const SignUp = (body) => api.post('/doctor/create', body);

export default {
  setHeaderWithToken,
  SignUp,
};
