import _ from 'lodash';
import { Text,SafeAreaView, Image} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CardSection, Card} from '../Components/Common';


class UserDetail extends Component 
{

  constructor(props)
  {
    super(props)
    
  }

  componentDidMount()
  {
    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.userList});
  }
  
  
  renderData()
  {
    var arr = _.values(this.props.user);
    var keys = _.keys(this.props.user)
    
    let a = this.props.user
    var arry = [];
    var img;
    Object.keys(a).map(function(keyName, keyIndex) {
      if (keyName === 'student_image_path')
      {
        
        let url = a[keyName];
        img =  (<CardSection key={`${keyName}`} style={{flexDirection:'row',
        justifyContent:'center',alignItems:'center'
        }} >
          <Image
             style={style.image}
             source={{uri: url}}
             resizeMode={"cover"}
         />
        </CardSection>)
      }
      else
      {

        var text = keyName.replace("_", " "); 
        text =  text && text[0].toUpperCase() + text.slice(1);
        arry.push(
          <CardSection key={`${text}`} style={{flexDirection:'row',
                                  justifyContent:'space-between'
                                  }} >
                <Text style={style.text}>{text}</Text>
                <Text style={style.text}>{a[keyName]}</Text>
          </CardSection>
        );
      }
    })
    arry.push(img);
    return arry.reverse();
  }
 
  render() {
    return (
      <SafeAreaView>
          <Card>
            {this.renderData()}
          </Card>
      </SafeAreaView>
      
    );
  }
}
export default connect(null,{  })(UserDetail);

const style = {
  text : {
    fontSize:20
  },
  image: {
    width: 150,
    height: 150,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 75
  },
}
