import React, {useContext} from 'react';
import { View, StyleSheet, Text,Button } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const HomeScreen = ()=> {
    const {signout} = useContext(AuthContext);
    return(
        <View style={styles.view}>
            <Button title='Sign Out' onPress={signout}/>
            <Text style={styles.text}>HomeScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:48
    },
    view:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})

export default HomeScreen;