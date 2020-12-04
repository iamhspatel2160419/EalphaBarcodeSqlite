import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';
import CreateStudent from './Components/CreateStudent';
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 85 }}>
      <Scene key="main">
        <Scene
          onRight={() => Actions.createStudent()}
          rightTitle="Add"
          key="userList"
          component={UserList}
          title="Student List"
          initial
        />
        <Scene key="createStudent" component={CreateStudent} title="Create Student" />
        <Scene key="userDetail" component={UserDetail} title="Student Detail" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;