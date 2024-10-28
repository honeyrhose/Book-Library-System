import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleLogin = () => {
    // Validate fields
    if (!email || !password) {
      setErrorMessage('Invalid field: Please fill in all fields.');
    } else {
      setErrorMessage(''); // Clear error message if validation passes
      navigation.navigate("Home"); // Navigate to Home if validation passes
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/logo.png")} style={styles.headerImage} />
      </View>

      <Text style={styles.headerText}>Welcome Back!</Text>

      {/* Display error message if it exists */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TextInput
        style={styles.textField}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Capture email input
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword} // Capture password input
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setSecureText(!secureText)}
        >
          <Feather name={secureText ? 'eye' : 'eye-off'} size={24} color="#07143F" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.signupButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={styles.forgetpasswordLinkButton}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signupLinkButton}>Create new account?</Text>
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
    marginTop: 100,
  },
  headerText: {
    fontSize: 23,
    fontWeight: '700',
    color: '#333', 
    marginBottom: 25, 
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
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
  passwordContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#07143F',
    borderWidth: 1.9,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  toggleButton: {
    marginLeft: 10,
  },
  loginButton: {
    width: 170,
    paddingVertical: 12, 
    backgroundColor: '#F85046', 
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15, 
  },
  forgetpasswordLinkButton:{
    color: '#1E1E1E', 
    marginTop: 50, 
  },
  signupButtonText: {
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 'bold',
  },
  signupLinkButton: {
    color: '#1E1E1E', 
    marginTop: 50,
  },
});
