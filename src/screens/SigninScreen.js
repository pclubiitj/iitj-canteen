import React from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

function SigninScreen() {
    const { signin } = React.useContext(AuthContext);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SigninScreen</Text>
        <Button title="Sign in" onPress={() => signin({ username:"username", password:"password" })} />
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },text:{
      fontSize:48
  }
})

export default SigninScreen;