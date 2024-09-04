import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
        <Image source={require("../assets/logo.png")} style={styles.headerImage} />
      </View>

      <Text style={styles.headerText}>Create an Account</Text>

      <TextInput style={styles.textField} placeholder="Email" />

      <TextInput style={styles.textField} placeholder="Full Name" />

      <TextInput style={styles.textField} placeholder="Username" keyboardType="email-address" />

      <TextInput style={styles.textField} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.signupButton} onPress={() => { /* Handle sign up action */ }}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {     }}>
        <Text style={styles.loginLinkButton}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF9FC', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30, 
  },
  headerImage: {
    width: '75%',
    height: undefined,
    aspectRatio: 1, 
    resizeMode: 'contain',
    marginTop: 30,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: 23,
    fontWeight: '700',
    color: '#333', 
    marginBottom: 20, 
  },
  textField: {
    width: '90%', 
    height: 40, 
    borderColor: '#07143F',
    borderWidth: 1.9,
    borderRadius: 10,
    marginBottom: 20, 
    paddingHorizontal: 20,
  },

  signupButton: {
    width: 170,
    paddingVertical: 12, 
    backgroundColor: '#F85046', 
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15, 
  },
  signupButtonText: {
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 'bold',
  },
  loginLinkButton: {
    color: '#1E1E1E', 
    marginTop: 40, 
 
  },
});
