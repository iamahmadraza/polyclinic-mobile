import {combineReducers} from 'redux';
import Category from './Category/reducer';
import SignUp from './SignUp/reducer';
import Login from './Login/reducer';
import DoctosList from './DoctorList/reducer';
import DoctorList from './DoctorList';

const appReducer = combineReducers({
  roleState: Category,
  signUpState: SignUp,
  loginState: Login,
  doctosListState: DoctorList,
});
export default appReducer;
