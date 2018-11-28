import React from 'react';
import {Text,View, StyleSheet,Image,TouchableOpacity} from 'react-native'
//import Swipeout from 'react-native-swipeout';
//import {delpro} from '../actions';
//import {connect} from 'react-redux';
import { AsyncStorage } from "react-native"
import { ForwardButton } from './ForwardButton';

class  ProfileEditHome extends React.Component{


          renderImage(){

            return(
                <Image
                style={{height: 60, width:60, marginRight:15, borderRadius:30}}
                source={require('../.././images/profile.png')}
                resizeMode = 'contain'
                />
            );

          /*  if(this.props.item.Image == '../.././images/p.png'){
               // console.log("heloo");
                
                return(
                    <Image
                    style={{height: 60, width:60, borderRadius:30}}
                    source={require('../.././images/profile.png')}
                    resizeMode = 'contain'
                    />
                );

            }
            else{
                
                return(
                    <Image
                    style={{height: 60, width:60,borderRadius:30}}
                    source={{uri: "data:image/jpeg;base64,"+this.props.item.Image}}
                    resizeMode = 'contain'
                    />
                   );

            }*/


        } 
          

  

       
         render(){
            /*  const{item} = this.props
            const swipeSettings = {
                autoClose: true,

                onClose: (secId, rowId,direction)=>{
                    if(this.state.activeRowKey!= null){
                        
                    this.setState({activeRowPKey:null});
                    this.setState({activeRowKey:null});
                    }
                },

                onOpen: (secId, rowId,direction)=>{
                    this.setState({activeRowKey: this.props.item.Id});
                    this.setState({activeRowPKey: this.props.item.Pid});

                },
                right:[  
                    {
                        onPress:()=>{
                            Alert.alert(
                                'Alert',
                                'Are you sure you want to delete ?',
                                [
                                    {text: 'No', onPress:() => console.log('Cancel Pressed'), style:'cancel'},
                                    {text: 'Yes', onPress:() => {
                                        const {Id} = this.props.item
                                        const {Pid} = this.props.item
                                        this.props.delpro({Id,Pid});
                                        
                                    }},
                                ],
                                {cancelable:true}
                            );

                        },
                        text:'Delete',type:'delete'
                    }
                ],
                rowId: this.props.item.Id,
                SectionId:1

            }; */

        return(
            // <Swipeout {...swipeSettings} >
            <TouchableOpacity style={styles.listStyle} >
                {this.renderImage()}
                <View  /* style={{width:"80%"}} */>
                <Text numberOfLines={1} style={{fontWeight:'bold', fontSize:18}}>
                    {this.props.Name}
                </Text>
                 </View>
                  <ForwardButton/> 
             </TouchableOpacity>  
           //  </Swipeout> 
        );
    };
    }
     const styles = StyleSheet.create({  
        listStyle: {
           // padding:10,
            opacity: 0.9,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'90%',
            alignSelf:'center',
            marginTop:8,
            marginBottom:10,
            //height:'20%',
            marginLeft:5,
            //marginBottom:10,
            borderBottomWidth:1,
            borderColor:"#D3D3D3"

        }
    
    
    }); 

   
    
    
    export default (ProfileEditHome); //connect(null,{delpro})