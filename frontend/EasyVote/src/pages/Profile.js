import React, { Component } from 'react';
import ProfileForm from '.././components/ProfileForm';
//import {Provider} from 'react-redux';
//import{createStore, applyMiddleware} from 'redux';
//import ReduxThunk from 'redux-thunk'
//import reducers from '../reducers'
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





export default class Profile extends Component {
  static navigationOptions = { header: null };
  render() {
    
    return (
    
        <ProfileForm/>
    
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F2F3',
  },
 
  
});