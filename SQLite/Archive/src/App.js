import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import SQLite from 'react-native-sqlite-storage';

global.imagePath = ''

global.db = SQLite.openDatabase(
  {
    name: 'UserDatabase.db',
    location: 'default',
    createFromLocation: '~SQLite.db',
  },
  () => { },
  error => {
    console.log("ERROR: " + error);
  }
);

class App extends Component 
{

  
  constructor(props) {
    super(props);
    
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(student_id INTEGER PRIMARY KEY AUTOINCREMENT, student_name VARCHAR(255), student_email VARCHAR(255), student_phonenumber VARCHAR(255), student_teacher_name VARCHAR(255), student_subject_teacher_name VARCHAR(255), student_image_path VARCHAR(500))',
              []
            );
          }
        }
      );
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;