import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Profile = ({ navigation, userEmail, onLogout }) => {
  
  const handleLogout = () => {
    if (typeof onLogout === 'function') onLogout();
    else navigation.replace('Login');
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: StatusBar.currentHeight + 10 }}>
        <Text>Profile</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.emailText}>{userEmail ? `Email: ${userEmail}` : 'Not signed in'}</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  logoutButton: {
    marginTop: 16,
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center'
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700'
  }
  ,
  emailText: {
    fontSize: 16,
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 12,
    fontWeight: '600'
  }
})

export default Profile
