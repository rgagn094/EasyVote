import React, { Component } from 'react';
import Twofactorform from '.././components/Twofactorform';
// import {Provider} from 'react-redux';
// import{createStore, applyMiddleware} from 'redux';

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
import {applyMiddleware, createStore} from "redux";
import reducers from "../reducers";
import ReduxThunk from "redux-thunk";
import Provider from "react-redux/es/components/Provider";





export default class TwoF extends Component {
  static navigationOptions = { header: null };
  render() {
    const{navigation} = this.props;
    return (
        <Provider store={createStore(reducers, {},applyMiddleware(ReduxThunk))}>
        <Twofactorform navigation={navigation}/>
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