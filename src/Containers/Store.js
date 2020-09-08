import {combineReducers} from 'redux';
import Category from './Category/reducer';
import SignUp from './SignUp/reducer';
import Login from './Login/reducer';

const appReducer = combineReducers({
  roleState: Category,
  signUpState: SignUp,
  loginState: Login,
});
export default appReducer;
