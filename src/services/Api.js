import apisauce from 'apisauce';
// import {BASE_URL} from 'react-native-dotenv';

const baseURL = 'http://doctor-app-backend.herokuapp.com';

const api = apisauce.create({
  baseURL,
  timeout: 1000 * 60,
});

const setHeaderWithToken = (token) => {
  if (token) {
    api.setHeader('Authorization', 'Bearer ' + token);
  }
};

const SignUpDoc = (body) => api.post('/doctors/create', body, {});
const SignUpPatient = (body) => api.post('/patients/signup', body, {});
const PatientLogin = (body) => api.post('/patients/login', body, {});
const DoctorLogin = (body) => api.post('/doctors/login', body, {});
const DoctoBySpeciality = (query) =>
  api.get(`/doctors/getDoctorsBySpecialty/?speciality=${query}`, {});

export default {
  setHeaderWithToken,
  SignUpDoc,
  SignUpPatient,
  PatientLogin,
  DoctorLogin,
  DoctoBySpeciality,
};
