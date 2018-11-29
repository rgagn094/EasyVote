import React, { Component } from 'react';
import {FormInput,Card,FormButton,HomeHeader2,Spinner,ForwardButton} from './index';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,login} from '../actions';
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


class SignUpForm extends Component {

      

     onEmailChanged(text){
        this.props.emailChanged(text);
    }
    
    onPasswordChanged(text){
        this.props.passwordChanged(text);
     } 

     onButtonPress(){
       const {email,password} = this.props;
      this.props.login({email,password});
      
     }

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
    <SafeAreaView style ={{width:'100%', height:'100%', backgroundColor:'white'}} >
     <HomeHeader2 navigate={this.props.navigation.goBack}/>
      <KeyboardAvoidingView style={{width:'90%',margin:'5%',marginTop:'30%'}} behavior = {(Platform.OS === 'ios') ? 'position' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
       
        <View style = {styles.viewStyle}>
        <Image
                style={{height: 100, alignSelf:'center', width:100, marginRight:15,}}
                source={require('../.././images/logoicon.png')}
                resizeMode = 'contain'
                />
        </View>

        <Card>
        <FormInput val={this.props.email} ct={this.onEmailChanged.bind(this)}  bool = {false} ph = {"Email"}/>
        </Card>
        
        
        
        {/* <View style={{height: 40, alignItems:'center', alignSelf: 'center', width: "100%"}}> */}
       

        <Card>
        <FormInput val={this.props.password} ct={this.onPasswordChanged.bind(this)}  bool = {true} ph = {"Input Password"}/>
        </Card>
        
       {/* </View> */}
       <View >
      <ForwardButton press={this.onButtonPress.bind(this)} place ={'TwoF'}/>
       
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
       marginTop: '20%',
        width: '100%',
    },
   
    
  });


  const mapStateToProps = state =>{
    return{
       email: state.auth.email,
       password: state.auth.password,
       }
};

export default connect(mapStateToProps,{emailChanged,passwordChanged,login})(SignUpForm) ;

 
