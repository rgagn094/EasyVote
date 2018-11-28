import React, { Component } from 'react';
import SecForm from '.././components/SecForm';
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





export default class Security extends Component {
  static navigationOptions = { header: null };
  render() {
    
    return (
    
        <SecForm/>
    
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