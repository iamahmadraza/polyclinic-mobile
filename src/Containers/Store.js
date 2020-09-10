import {combineReducers} from 'redux';
import Category from './Category/reducer';
import SignUp from './SignUp/reducer';
import Login from './Login/reducer';
import Doctor from './DoctorHome/reducer';
import DoctorForm from './DoctorForm/reducer';
import DoctorList from './DoctorList/reducer';
import OnSiteAppointment from './AddOfflineAppointment/reducer';

const appReducer = combineReducers({
  roleState: Category,
  signUpState: SignUp,
  loginState: Login,
  doctorState: Doctor,
  doctorFormState: DoctorForm,
  onSiteAppointmentState: OnSiteAppointment,
  doctorListState: DoctorList,
});
export default appReducer;
