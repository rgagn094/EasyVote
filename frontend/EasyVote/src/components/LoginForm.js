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
  Keyboard
} from 'react-native';


class LoginForm extends Component {

      

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
    <SafeAreaView style={{width:'90%',margin:'5%',marginTop:'30%'}}>
      <KeyboardAvoidingView  behavior = {(Platform.OS === 'ios') ? 'position' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <View style = {styles.viewStyle}>
        <Text style = {{ alignSelf:'flex-start', fontSize: 19}}>Type your full name</Text>
        </View>

        <Card>
        <FormInput /*val={this.props.email} ct={this.onEmailChanged.bind(this)}*/  bool = {false} ph = {"First Name"}/>
        </Card>
        <Card>
        <FormInput /*val={this.props.password} /* ct={this.onPasswordChanged.bind(this)} */  bool = {true} ph = {"Last Name"}/>
        </Card>
        
        
        {/* <View style={{height: 40, alignItems:'center', alignSelf: 'center', width: "100%"}}> */}
        <View style = {styles.viewStyle}>
        <Text style = {{ alignSelf:'flex-start', fontSize: 19}}>Create Password</Text>
        </View>

        <Card>
        <FormInput /*val={this.props.email} ct={this.onEmailChanged.bind(this)}*/  bool = {false} ph = {"Input Password"}/>
        </Card>
        <Card>
        <FormInput /*val={this.props.password} /* ct={this.onPasswordChanged.bind(this)} */  bool = {true} ph = {"Confirm Password"}/>
        </Card>
       {/* </View> */}
       <View >
      <ForwardButton/>
       
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
      backgroundColor: '#F4F2F3',
      width: '100%',

    },
    viewStyle: {
       // height: '100%',
       marginTop: 20,
        width: '100%',
    },
   
    
  });

  export default LoginForm;
