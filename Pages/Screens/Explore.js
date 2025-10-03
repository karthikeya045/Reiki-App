import { View, TextInput, StatusBar } from 'react-native'
import React from 'react'

const Explore = () => {
  return (
    <View style={{paddingTop: StatusBar.currentHeight + 10}}>
      <TextInput placeholder='Search Treatments/Techniques' 
      style={{height:40, borderColor:'gray', borderWidth:1, margin:10, padding:10, borderRadius:10}} />
      
    
    
    </View>
  )
}

export default Explore