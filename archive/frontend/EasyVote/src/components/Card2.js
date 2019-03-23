import React from 'react';
import {View,StyleSheet} from 'react-native';

const Card2 = (props) =>{

    return(
        <View style = {styles.viewStyle}>
            {props.children}
        </View>
    );
};


const styles = StyleSheet.create({
    
    viewStyle: {
        
        marginBottom: 20,
        width: "100%",
        height: '5%',
    },

   
});

export {Card2};