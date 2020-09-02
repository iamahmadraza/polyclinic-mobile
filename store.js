import {combineReducers} from 'redux';
import LoginReducer from './src/Containers/Login/reducer';
import HomeReducer from './src/Containers/Home/reducer';

const appReducer = combineReducers({
  loginState: LoginReducer,
  homeState: HomeReducer
});
export default appReducer;
