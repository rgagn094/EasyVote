import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native'

const HomeHeader = (props) =>{
    return(
    <View style={styles.viewStyle}>

         <TouchableOpacity onPress={() =>
            props.navigate()} style={{ justifyContent:'flex-start'}} > 
         <Image style={{height: 20, width:20,marginTop:12, marginLeft:20}}
            source={require('../.././images/leftarroww.png')}
            resizeMode = 'contain'/>
            <View><Text style={{fontSize:15, marginLeft:20, color:"#63B8FF"}}>back</Text></View>
        </TouchableOpacity> 

    <View /* numberOfLines={1}  */>
        <Text style={{fontSize:30,alignSelf:'center', marginLeft:20}}>{props.ti}</Text>
        </View>
       
        
    </View>
    );
}


const styles = StyleSheet.create({
    
    viewStyle: {
        opacity: 0.7,
        top:5,
        alignSelf: 'center',
        alignItems:'flex-start',
       justifyContent:'space-between',
        flexDirection: 'column',
        marginBottom:35,
        width: '100%',
        height: '13%',
       // backgroundColor: 'white',
    
    
    },

   
});

export {HomeHeader};