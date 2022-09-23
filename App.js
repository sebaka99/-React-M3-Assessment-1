import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, Alert, ToastAndroid, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import DashboardScreen from './screens/dashboard';
import ChatScreen from './screens/chat';
import SplashScreen from './screens/splash_screen';

const Stack = createNativeStackNavigator();

//AppRegistry.registerComponent(appName.toLowerCase(), () => App);

export default function App() {



  return (

    <NavigationContainer>
      <Stack.Navigator>
   
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }}
        />


      </Stack.Navigator>

    </NavigationContainer>


    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Make space between the image and text inputs
  image :{
    marginBottom: 40
  },

  inputView: {
    backgroundColor: "skyblue",
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginBottom: 20,
    alignItems: "center"
  },

  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgotButton: {
    height: 30,
    marginBottom: 30,
  },

  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'yellow',
  }
});
