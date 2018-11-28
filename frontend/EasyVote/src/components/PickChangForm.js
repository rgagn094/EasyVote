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
  TouchableOpacity,
  Text,
  ListView,
  Image,
  SafeAreaView,
  Keyboard
} from 'react-native';



class SettingsEditForm extends Component {
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
    <SafeAreaView style={{width:'100%', height:'100%', alignItems:'center', marginTop:'5%'}}>
    <HomeHeader/>
    <View style={{width:'94%',height:'60%', borderWidth:1,borderRadius:20,marginBottom:50}}>
      <Text style={{fontSize: 30,alignSelf:'center',margin:30}}>Edit Picture</Text>

      <TouchableOpacity style={{height: 200, width:200,marginBottom:40,borderWidth:1,borderRadius:100,justifyContent:'center', alignSelf:'center'}} > 
      <Image style={{height: 60, width:60,marginBottom:10,alignSelf:'center'}}
            source={require('../.././images/plus.png')}
            resizeMode = 'contain'/>
      </TouchableOpacity>

      <Image style={{height: 30, width:30,marginBottom:10,alignSelf:'center'}}
            source={require('../.././images/cam.png')}
            resizeMode = 'contain'/>
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

  export default SettingsEditForm;