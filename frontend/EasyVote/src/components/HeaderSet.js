import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native'

const HeaderSet = (props) =>{
    return(
    <View style={styles.viewStyle}>

    <TouchableOpacity  onPress={() =>{props.press(props.place2)}}  style={{ justifyContent:'flex-start'}}> 
         <Image style={{height: 40, width:40,alignSelf:"center",alignItems:"center"}}
            source={require('../.././images/profile.png')}
            resizeMode = 'contain'/>
            {/*<Text>{props.ti2}</Text>*/}
        </TouchableOpacity> 

         

    <TouchableOpacity onPress={() =>{props.press(props.place)}}  style={{justifyContent:'flex-start'}}> 
         <Image style={{height: 40, width:40}}
            source={require('../.././images/settings.png')}
            resizeMode = 'contain'/>
    </TouchableOpacity> 
        
        
    </View>
    );
}
 

const styles = StyleSheet.create({
    
    viewStyle: {
        //borderWidth:1,
        opacity: 0.7,
        top:0,
        
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        width: '86%',
        height: '13%',
       // backgroundColor: 'white',
    },

   
});

export {HeaderSet};