import React, { Component } from 'react';
import ProfileEditForm from '.././components/ProfileEditForm';
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





export default class ProfileEdit extends Component {
  static navigationOptions = { header: null };
  render() {
    const{navigation} = this.props;
    return (
    
        <ProfileEditForm navigation={navigation}/>
    
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