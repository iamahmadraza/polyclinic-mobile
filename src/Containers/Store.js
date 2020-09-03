import {combineReducers} from 'redux';
import Category from './Category/reducer';

const appReducer = combineReducers({
  roleState: Category,
});
export default appReducer;
