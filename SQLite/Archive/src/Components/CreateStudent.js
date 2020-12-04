import React, { Component } from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {  studentCreate } from '../actions';
import StudentForm from './StudentForm';
import {Card,CardSection,Button} from './Common';


class CreateStudent extends Component 
{

  onButtonPress() 
  {
    const { name, phone, email, teacherName,sub,student_image_path } = this.props;
    
    if(name=='')
    {
      alert("Enter name");
      return
    } 
    else if(phone=='')
    {
      alert("Enter Phone");
      return
    } 
    else if(email=='')
    {
      alert("Enter email");
      return
    } 
    else if(teacherName=='')
    {
      alert("Select teacher name");
      return
    } 
    else if(sub=='')
    {
      alert("Select Subject");
      return
    } 



    this.props.studentCreate({ name, phone, email, teacherName,sub,student_image_path });
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
        <Card>
          <StudentForm {...this.props}/>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
        </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
    const { name, phone, email, teacherName,sub,student_image_path } = state.studentForm;
  
    return { name, phone, email, teacherName,sub,student_image_path };
  };

export default connect(mapStateToProps, { studentCreate})(CreateStudent);

