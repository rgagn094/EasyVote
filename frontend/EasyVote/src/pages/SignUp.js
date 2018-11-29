import React, { Component } from 'react';
import SignUpForm from '.././components/SignUpForm';
import {Provider} from 'react-redux';
import{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
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





export default class Login extends Component {
  static navigationOptions = { header: null };
  render() {
    const{navigation} = this.props;
    return (
      <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
        <SignUpForm navigation={navigation}/>
        </Provider>
    
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