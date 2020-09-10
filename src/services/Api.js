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

//PatientAPI
const SignUpPatient = (body) => api.post('/patients/signup', body, {});
const PatientLogin = (body) => api.post('/patients/login', body, {});

//DoctorAPI
const SignUpDoc = (body) => api.post('/doctors/create', body, {});
const DoctorLogin = (body) => api.post('/doctors/login', body, {});
const GetSpecialities = () => api.get('/specialty/getAllSpecialty');
const DoctoBySpeciality = (query) =>
  api.get(`/doctors/getDoctorsBySpecialty/?Specialty=${query}`, {});
const updateProfileDoc = (body) => api.put('/doctors/profileupdate', body, {});
const addOnSiteAppointment = (body, id) =>
  api.post(`/doctors/profileupdate/${id}`, body, {});
const getHospitals = () => api.get('/hospital/get', {});

export default {
  setHeaderWithToken,
  SignUpDoc,
  SignUpPatient,
  PatientLogin,
  DoctorLogin,
  DoctoBySpeciality,
  GetSpecialities,
  updateProfileDoc,
  addOnSiteAppointment,
  getHospitals,
};
