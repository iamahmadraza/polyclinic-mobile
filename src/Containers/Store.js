import {combineReducers} from 'redux';
import Category from './Category/reducer';
import SignUp from './SignUp/reducer';

const appReducer = combineReducers({
  roleState: Category,
  signUpState: SignUp,
});
export default appReducer;
