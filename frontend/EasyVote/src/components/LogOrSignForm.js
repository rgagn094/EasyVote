import React, { Component } from 'react';
import {FormInput,Card,FormButton,FormButton2,Link,Spinner,ForwardButton} from './index';
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
  Keyboard,
  Image
} from 'react-native';


class LogOrSignForm extends Component {

      

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
    <SafeAreaView style={{width:'100%',backgroundColor: 'white', height:'100%',alignSelf:'center'}}>
      <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'position' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{height:'100%'}}>
        <View style = {styles.viewStyle}>
        
        <Image
                style={{height: 200, alignSelf:'center', width:300, marginRight:15,}}
                source={require('../.././images/logo.jpeg')}
                resizeMode = 'contain'
                />
       
        </View>

        
        
       {/* </View> */}
       <View style={{flexDirection:'row',alignItems:'center',marginBottom:20, height:'7%', alignSelf:'center'}} >
       <FormButton2 press = {this.props.navigation.navigate} place ={'SignUp'}   val = {"Login"}/>
       
       </View>
       <View style={{flexDirection:'row',alignItems:'center', height:'7%', alignSelf:'center'}} >
    
       <FormButton press = {this.props.navigation.navigate} place ={'Login'}  val = {"Sign Up"}/>
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
       height: '30%',
       marginTop: '40%',
        width: '100%',
    },
   
    
  });

  export default LogOrSignForm;