import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      setError('');
      onLogin(email); // Pass email to parent callback on success
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Reiki</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#555"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholderTextColor="#555"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <Text style={styles.forgotText}>Forgot Password?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          {/* <AntDesign name="google" size={24} color="white" style={{ marginRight: 8 }} /> */}
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleLoginButton}>
            <AntDesign name="google" size={24} color="white" style={{ marginRight: 8 }} /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 25,
    backgroundColor: '#f2f6fc',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 46,
    color: '#2c3e50',
    paddingTop: 60,
    fontWeight: '700',
    fontFamily: 'Helvetica',
  },
  loginLabel: {
    textAlign: 'center',
    fontSize: 22,
    color: '#34495e',
    fontWeight: '600',
    fontFamily: 'Helvetica',
  },
  inputContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 12,
    fontSize: 20,
    width: '100%',
    backgroundColor: 'white',
    color: '#2c3e50',
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 16,
    marginVertical: 8,
    textAlign: 'center',
  },
  forgotText: {
    color: '#2980b9',
    fontSize: 17,
    textAlign: 'right',
    marginRight: 10,
    fontWeight: '600',
  },
  buttonsContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  loginButton: {
    flexDirection: 'row',
    backgroundColor: '#4285F4', // Google blue color
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 14,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3969e8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 6,
  },
  loginButtonText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  registerButton: {
    backgroundColor: '#bdc3c7',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 14,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#a0a0a0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
  registerButtonText: {
    fontSize: 20,
    color: '#2c3e50',
    fontWeight: '600',
  },
  googleLoginButton: {
    backgroundColor: '#4285F4',  // Google blue
    width: 56,
    height: 56,
    borderRadius: 28,           // Half of width/height for circle
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#3969E8',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 7,
  }
});

export default LoginPage;
