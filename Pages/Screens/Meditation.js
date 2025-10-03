import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const Meditation = () => {
  return (
    <View style={{paddingTop: StatusBar.currentHeight + 10}}>
      <Text>Meditation</Text>
    </View>
  )
}

export default Meditation