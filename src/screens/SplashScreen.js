import React,{useEffect,useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const SplashScreen = ()=>{
    const {tryLocalSignin} = useContext(AuthContext);
    useEffect(()=>{
      tryLocalSignin();
    },[]);
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Loading....</Text>
        </View>
      );
};
const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },text:{
      fontSize:48
  }
})

export default SplashScreen;