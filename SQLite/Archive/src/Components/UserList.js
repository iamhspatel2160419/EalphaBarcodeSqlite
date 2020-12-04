import _ from 'lodash';
import { Text, FlatList,SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {userFetch} from '../actions/UserActions';
import {CardSection, Card} from '../Components/Common';
import { Actions } from 'react-native-router-flux';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

class UserList extends Component 
{

  
  constructor(props)
  {
    super(props)
    this.state = {
      data: []
    };
    this.onPress = this.onPress.bind(this);
    
  }
 
  componentDidMount()
  {
    this.props.userFetch();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.userList)
    this.setState({data: nextProps.userList});
  }
  onPress(item) 
  {
    
    Actions.userDetail({ user: item });
  }

  renderItem(item)
  {
    return (
      <TouchableWithoutFeedback onPress={() => this.onPress(item)}>
        <View>
        <Card>
          <CardSection>
          <Text style={{fontSize: 18}}>{item.student_name}</Text>
          <CardSection/>
        </CardSection>
        </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
 
  render() {
    return (
      <SafeAreaView>
          <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
           renderItem={({ item }) => this.renderItem(item)}
        />
      </SafeAreaView>
      
    );
  }
}

const mapStateToProps = state => {
  const userList = state.listUser;
  
  return { userList };
};

export default connect(mapStateToProps,{ userFetch })(UserList);