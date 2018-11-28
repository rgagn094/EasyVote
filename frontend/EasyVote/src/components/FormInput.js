import React from 'react';
import {View, TextInput,StyleSheet} from 'react-native';

const FormInput = (props) =>{

    return(
        <View style = {styles.viewStyle}>
            <TextInput value={props.val} onChangeText={props.ct} placeholder = {props.ph} autoCorrect={false} secureTextEntry = {props.bool} style = {styles.inputStyle}/>
        </View>
    );
};


const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
    viewStyle: {
        height: '100%',
        width: '100%',
    },

   
});

export {FormInput};