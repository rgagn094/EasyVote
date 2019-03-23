import React, { Component } from 'react';
import {FormInput,Card,FormButton,Link,Spinner,ForwardButton} from './index';
//import {connect} from 'react-redux';
//import {emailChanged,passwordChanged,loginUser} from '../actions';
import { AsyncStorage } from "react-native"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Image,
  Keyboard
} from 'react-native';


class HomeForm extends Component {

      

    /* onEmailChanged(text){
        this.props.emailChanged(text);
    }
    
    onPasswordChanged(text){
        this.props.passwordChanged(text);
     } */

    /* onButtonPress(){
       const {email,password} = this.props;
      this.props.loginUser({email,password});
      
     }*/

   /* renderError(){
    if(this.props.error){
      return(
        <View>
          <Text style={{alignSelf: 'center', color: 'red'}}> {this.props.error}</Text>
        </View>
      );
    }
  } */

  renderButton(){
    /* if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{ */
     return <FormButton /*press={this.onButtonPress.bind(this)}*/ val = {"Login"}/>;
   // }
  }

  render() {
    //const {vall} = this.props;
    return (
    <SafeAreaView style={{backgroundColor: 'white',width:'100%', height:'100%',alignSelf:'center'}}>
      <KeyboardAvoidingView style={{marginTop:'20%',width:'100%',}}  behavior = {(Platform.OS === 'ios') ? 'position' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <View style = {styles.viewStyle}>
        {/* <Text style = {{ alignSelf:'center', fontSize: 40}}>Easy Vote</Text> */}
        <Image
                style={{height: 200, width:300, marginRight:15,}}
                source={require('../.././images/logo.jpeg')}
                resizeMode = 'contain'
                />
        </View>

        
        
       {/* </View> */ /* */}
       <View style={{flexDirection:'row', bottom:0,alignItems:'center', alignSelf:'center', marginTop:'15%'}} >
       <Text style = {{ alignSelf:'center',alignItems:'flex-end', marginLeft:20,  fontSize: 30}}> Get Started</Text>
      <ForwardButton place={'LogOrSign'}  press = {this.props.navigation.navigate}/>  
       
       </View>
       </View>
       
       
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
      </SafeAreaView>
     
       
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',

    },
    viewStyle: {
       // height: '100%',
       marginTop: '50%',
        width: '100%',
        alignItems:'center',
       // borderWidth:1,
    },
   
    
  });

  export default HomeForm;