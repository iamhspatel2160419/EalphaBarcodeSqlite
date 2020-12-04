import { Actions } from 'react-native-router-flux';
import ApiManager from '../api/ApiManager';
import {
    FETCH_USER_LIST
} from './types';



export const userFetch = () => {
  return async (dispatch) => {

    var array = [];
    let selectQuery = await this.ExecuteQuery("SELECT * FROM table_user", []);
    var rows = selectQuery.rows;
    for (let i = 0; i < rows.length; i++) {
      var item = rows.item(i);
      array.push(item)
    }
    dispatch({ type: FETCH_USER_LIST,
                  payload: array });
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



