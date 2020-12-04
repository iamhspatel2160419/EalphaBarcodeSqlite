import { Actions } from 'react-native-router-flux';


import {
  STUDENT_UPDATE, STUDENT_CREATE
} from './types';



export const studentUpdate = ({ prop, value }) => {
  return {
    type: STUDENT_UPDATE,
    payload: { prop, value }
  };
};

ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
  db.transaction((trans) => {
    trans.executeSql(sql, params, (trans, results) => {
      resolve(results);
    },
      (error) => {
        reject(error);
      });
  });
});


export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    return null;
  }
};
export const studentCreate = ({ name, phone, email, teacherName,sub,student_image_path }) => {
  
 return async (dispatch) => {
    const _student_image_path = imagePath
    let singleInsert = await this.ExecuteQuery("INSERT INTO table_user (student_name,student_email,student_phonenumber,student_teacher_name,student_subject_teacher_name,student_image_path) VALUES ( ?, ?, ?, ?, ?, ?)", [name, email, phone,teacherName,sub,_student_image_path]); 
    dispatch({ type: STUDENT_CREATE });
    Actions.userList({ type: 'reset' });
  };
};
