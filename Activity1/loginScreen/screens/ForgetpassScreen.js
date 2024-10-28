import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


export default function LoginrScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>

      <View>
        <Image source={require("../assets/logo.png")} style={styles.headerImage} />
      </View>

      <Text style={styles.headerText}>Password Reset</Text>

      <TextInput style={styles.textField} placeholder="Current Password" />
      <TextInput style={styles.textField} placeholder="New Password" />
      <TextInput style={styles.textField} placeholder="Re-type New Password" />

      <TouchableOpacity style={styles.resetpasswordButton} onPress={() => navigation.navigate()}>
        <Text style={styles.resetpasswordButtonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.cancelLinkButton}>Cancel</Text>
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
    marginTop: 40,
  },
  headerText: {
    fontSize: 23,
    fontWeight: '700',
    color: '#333', 
    marginBottom: 25, 
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

  resetpasswordButton: {
    width: 170,
    paddingVertical: 12, 
    backgroundColor: '#F85046', 
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15, 
  },
  resetpasswordButtonText: {
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 'bold',
  },
  cancelLinkButton:{
    color: '#1E1E1E', 
    marginTop: 20,
  }
});
