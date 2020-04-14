import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { setNavigator } from './src/navigationRef';

import SigninScreen from './src/screens/SigninScreen';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';

const Stack = createStackNavigator();

export default ()=>{
  return(
    <AuthProvider>
      <NavigationContainer ref={(navigator)=>{setNavigator(navigator)}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen}/>
          <Stack.Screen name="SigninScreen" component={SigninScreen}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}