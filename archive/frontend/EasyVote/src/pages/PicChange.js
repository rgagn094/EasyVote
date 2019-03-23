import React, { Component } from 'react';
import PickChangForm from '.././components/PickChangForm';
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





export default class LogOrSign extends Component {
  static navigationOptions = { header: null };
  render() {
    const{navigation} = this.props;
    return (
    
        <PickChangForm navigation={navigation}/>
    
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