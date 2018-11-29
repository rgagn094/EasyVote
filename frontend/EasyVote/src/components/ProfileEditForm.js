import React, { Component } from 'react';
import {HomeHeader} from './index';
//import {connect} from 'react-redux';
//import {emailChanged,passwordChanged,loginUser} from '../actions';
import { AsyncStorage } from "react-native"
import ProfileEditHome from './ProfileEditHome';
import ForwardButton from './ForwardButton'
import {
  Platform,
  StyleSheet,
  View,
  ListView,
  SafeAreaView,
  Keyboard
} from 'react-native';



class ProfileEditForm extends Component {
  constructor(props) {
    super(props);
  this.state = {
    profiles: [
      {
        Name: "Donald Trump",
        Party: '../.././images/profile.png',
        Age:24

      }, 
     {
      Name: "Nasty Woman",
      Party: '../.././images/profile.png',
      Age:24
        
      },
      {
        Name: "Donald Trump",
        Party: "Republican",
        Age:24

      }, 
     {
      Name: "Nasty Woman",
      Party: "Democrats",
      Age:24
        
      },
      {
        Name: "Donald Trump",
        Party: "Republican",
        Age:24

      }, 
     {
      Name: "Nasty Woman",
      Party: "Democrats",
      Age:24
        
      },
      {
        Name: "Donald Trump",
        Party: "Republican",
        Age:24
      }, 
     {
      Name: "Nasty Woman",
      Party: "Democrats",
      Age:24
      } 
  ],
}
  }
  

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

  getProfiles(){
    return  this.state.profiles;
  }

  

  

  render() {
    //const {vall} = this.props;
    return (
    <SafeAreaView style={{width:'100%', height:'100%', backgroundColor:'white', alignItems:'center', marginTop:'5%'}}>
    <HomeHeader navigate={this.props.navigation.goBack} ti='Profile'/>
    <View style={{width:'94%',borderWidth:1,borderRadius:20,marginBottom:30}}>
      <ProfileEditHome Name='Edit Profile' editImage='../.././images/profile.png'/>
    <ProfileEditHome Name='FAQ' editImage='../.././images/profile.png'/>  
    </View>
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
       marginTop: '50%',
        width: '100%',
    },
   
    
  });

  export default ProfileEditForm;