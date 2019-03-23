import React from 'react';
import {StyleSheet,TouchableOpacity,Image} from 'react-native';

const ForwardButton = (props) =>{
    return(
        <TouchableOpacity onPress={() =>{props.press(props.place)}} style={{alignSelf: 'flex-end',
        alignItems:'flex-end',
        justifyContent: 'flex-end'}}> 
         <Image style={{height: 40, width:40,marginTop:12, marginLeft:20}}
            source={require('../.././images/forward.png')}
            resizeMode = 'contain'/>
           
        </TouchableOpacity> 
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
        alignSelf: 'flex-start',
        alignItems:'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderWidth:1,
        width: '100%',
        borderRadius: 15,
        height: '100%',
    },

   
});

export {ForwardButton}; 

//project comp arch,presentaion comp arch, photo's,econs assignment,asto assignment,quiz study, 