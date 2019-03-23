import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';

const FormButton2 = (props) =>{

    return(
        <TouchableOpacity onPress={() =>{props.press(props.place)}} style = {styles.viewStyle}>
        <Text style = {{color: '#ffffff',fontSize: 27}}>{props.val}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.9,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '65%',
        borderRadius: 15,
        height: '100%',
        backgroundColor: '#6FA8DD',
    },

   
});

export {FormButton2};