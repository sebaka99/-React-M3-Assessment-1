import React from "react";
import { View, Button, StyleSheet } from "react-native";


const Dashboard = ( { navigation }) =>{

    return (

      <View style={styles.container}>
      <Text>This is Details</Text>
  </View>

    );
}

export default Dashboard;

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
  