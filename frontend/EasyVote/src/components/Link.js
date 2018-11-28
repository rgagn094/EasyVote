import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';

const Link = (props) =>{
    return(
        <TouchableOpacity style = {styles.viewStyle} onPress={() =>
            props.navigate(props.screen)}>
        <Text style = {{color: 'blue', alignSelf:'center', fontSize: 19}}>{props.val}</Text>
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
        width: '100%',
        borderRadius: 15,
        height: '100%',
    },

   
});

export {Link};