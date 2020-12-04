import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import StudentReducer from './StudentReducer';

export default combineReducers({
  listUser: UserReducer,
  studentForm: StudentReducer,
});