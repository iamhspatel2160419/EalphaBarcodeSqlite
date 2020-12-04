import React, { Component } from 'react';
import { View, Text, Picker, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { studentUpdate } from '../actions';
import { CardSection, Input } from './Common';
import ImagePicker from 'react-native-image-picker';



class StudentForm extends Component {


   options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: ''
    }
  }
  chooseImage =  () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        
        imagePath = response.uri;
        this.setState({
          filePath: response,
          fileUri: response.uri
        });
        
        
      }
    });
  }
  launchCamera =  () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        imagePath = response.uri;
        this.setState({
          filePath: response,
          fileUri: response.uri
        });
        
        
      }
    });

  }

  launchImageLibrary =  () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        imagePath = response.uri;
        this.setState({
          filePath: response,
          fileUri: response.uri
        });
        
      }
    });

  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={{uri:'https://images.techhive.com/images/article/2016/07/photos-ios-icon-100671051-large.jpg'}}
        style={styles.images}
      />
    }
  }
  render() {
    
    return (
      <SafeAreaView>
      <View>
        
        
        <CardSection style={{flexDirection:'column',
        justifyContent:'center',alignItems:'center'
        }}>
        <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Pick Images from Camera & Gallery</Text>
            <View style={styles.ImageSections}>
              <View>
                {this.renderFileUri()}
                <Text style={{textAlign:'center'}}>File Uri</Text>
              </View>
            </View>
        </CardSection>


        <CardSection style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
          
              <TouchableOpacity onPress={this.chooseImage} style={[styles.btnSection,{margin:15}]}  >
                <Text style={styles.btnText}>Choose File</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.launchCamera} style={[styles.btnSection,{margin:15}]}  >
                <Text style={styles.btnText}>Directly Launch Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.launchImageLibrary} style={[styles.btnSection,{margin:15}]}  >
                <Text style={styles.btnText}>Directly Launch Image Library</Text>
              </TouchableOpacity>
          

        </CardSection>

          


        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.studentUpdate({ prop: 'name', value })}
          />
        </CardSection>


        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.studentUpdate({ prop: 'phone', value })}
          />
        </CardSection>


        <CardSection>
          <Input
            label="Email"
            placeholder="test@gmail.com"
            value={this.props.email}
            onChangeText={value => this.props.studentUpdate({ prop: 'email', value })}
          />
        </CardSection>



        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Teacher Name</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.teacherName}
            onValueChange={value => this.props.studentUpdate({ prop: 'teacherName', value })}
          >
            <Picker.Item label="Harsh Patel" value="Harsh Patel" />
            <Picker.Item label="Krutik Soni" value="Krutik Soni" />
            <Picker.Item label="Ramesh Solanki" value="Ramesh Solanki" />
          </Picker>
        </CardSection>


        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Subject Name</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.sub}
            onValueChange={value => this.props.studentUpdate({ prop: 'sub', value })}
          >
            <Picker.Item label="Maths" value="Maths" />
            <Picker.Item label="Science" value="Science" />
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Social Science" value="Social Science" />
            <Picker.Item label="Drawing" value="Drawing" />
          </Picker>
        </CardSection>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
};

const mapStateToProps = (state) => {
  const { name, phone, email, teacherName,sub,student_image_path } = state.studentForm;

  return { name, phone, email, teacherName,sub,student_image_path };
};

export default connect(mapStateToProps, { studentUpdate })(StudentForm);