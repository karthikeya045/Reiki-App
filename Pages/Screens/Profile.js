import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{paddingTop: StatusBar.currentHeight + 10}}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile