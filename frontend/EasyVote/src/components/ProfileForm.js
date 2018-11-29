import React, { Component } from 'react';
import {HeaderSet} from './index';
//import {connect} from 'react-redux';
//import {emailChanged,passwordChanged,loginUser} from '../actions';
import { AsyncStorage } from "react-native"
import ProfileHome from './ProfileHome';
import {
  Platform,
  StyleSheet,
  ListView,
  SafeAreaView,
  Keyboard
} from 'react-native';



class ProfileForm extends Component {
  constructor(props) {
    super(props);
  this.state = {
    profiles: [
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

  renderRow(item){
    return <ProfileHome /*navigate={this.state.nav}*/item={item}/>
   }

  renderButton(){ 
   /*  if(this.props.loading){
      return <Spinner size="large"/>;
    }
    else{ */
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.getProfiles())
     return <ListView
     horizontal={true}
     style={{width:'90%',marginTop:'10%'}}
     dataSource={this.dataSource}
     enableEmptySections = {true}
     renderRow={this.renderRow}
     />
      ;
    //}
  }

  render() {
    //const {vall} = this.props;
    return (
    <SafeAreaView style={{width:'100%', height:'100%',backgroundColor:'white',alignItems:'center', marginTop:'5%'}}>
    <HeaderSet place2={'ProfileEdit'} press = {this.props.navigation.navigate} place ={'SettingsEdit'}/>
      {this.renderButton()}
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

  export default ProfileForm;