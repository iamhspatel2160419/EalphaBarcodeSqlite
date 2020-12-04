import {
    STUDENT_CREATE,
    STUDENT_UPDATE,
    STUDENT_SAVE_SUCCESS
  } from '../actions/types';
  
  const INITIAL_STATE = {
    name: '',
    phone: '',
    email: '',
    sub:'',
    teacherName:'',
    student_image_path:''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case STUDENT_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
      case STUDENT_CREATE:
        return INITIAL_STATE;
      case STUDENT_SAVE_SUCCESS:
        return INITIAL_STATE;
      default:
        return state;
    }
  };