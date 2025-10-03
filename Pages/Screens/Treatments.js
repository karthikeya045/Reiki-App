import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'

const treatments = [
  {
    title: "Self Healing",
    description: "Reiki for self-healing involves giving yourself full Reiki treatments consistently over time, rather than just focusing on symptom areas. Treatments should cover the entire body using specific hand positions held for 3-5 minutes each. This whole-body approach addresses physical, emotional, mental, and spiritual levels of wellbeing. Reiki works best as a system, treating all parts of the body, not just localized symptoms."
  },
  {
    title: "Distant Healing",
    description: "Reiki for self-healing involves giving yourself full Reiki treatments consistently over time, rather than just focusing on symptom areas. Treatments should cover the entire body using specific hand positions held for 3-5 minutes each. This whole-body approach addresses physical, emotional, mental, and spiritual levels of wellbeing. Reiki works best as a system, treating all parts of the body, not just localized symptoms."
  },
  {
    title: "Person Healing",
    description: "Reiki for self-healing involves giving yourself full Reiki treatments consistently over time, rather than just focusing on symptom areas. Treatments should cover the entire body using specific hand positions held for 3-5 minutes each. This whole-body approach addresses physical, emotional, mental, and spiritual levels of wellbeing. Reiki works best as a system, treating all parts of the body, not just localized symptoms."
  }
]

const Treatments = () => {
  const [search, setSearch] = useState('')
    const [fontSize, setFontSize] = useState(14)
  
    const filteredTreatments = treatments.filter(({ title, description }) => {
      const query = search.toLowerCase()
      return (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
      )
    })
  
    const increaseFont = () => {
      if (fontSize < 24) setFontSize(fontSize + 1)
    }
  
    const decreaseFont = () => {
      if (fontSize > 10) setFontSize(fontSize - 1)
    }
  
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search techniques..."
          value={search}
          onChangeText={setSearch}
        />
        <ScrollView contentContainerStyle={styles.container}>
          {filteredTreatments.map(({ title, description }, index) => (
            <View key={index} style={styles.tile}>
              <Text style={[styles.title, { fontSize: fontSize + 4 }]}>{title}</Text>
              <Text style={[styles.desc, { fontSize }]}>{description}</Text>
            </View>
          ))}
          {filteredTreatments.length === 0 && (
            <Text style={styles.noResults}>No results found</Text>
          )}
        </ScrollView>
        <View style={styles.zoomControls}>
          <TouchableOpacity style={styles.zoomButton} onPress={decreaseFont}>
            <Text style={styles.zoomText}>A-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zoomButton} onPress={increaseFont}>
            <Text style={styles.zoomText}>A+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, padding: 16, backgroundColor: '#f7f9fc', paddingTop: StatusBar.currentHeight + 10 },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  container: { paddingBottom: 16 },
  tile: {
    backgroundColor: '#e0eaff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2
  },
  title: { fontWeight: '700', marginBottom: 8, color: '#1e293b' },
  desc: { color: '#334155' },
  noResults: { textAlign: 'center', marginTop: 32, fontSize: 16, color: '#999' },
  zoomControls: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    flexDirection: 'row',
    backgroundColor: '#e0eaff',
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 5,
  },
  zoomButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#3b82f6',
  },
  zoomText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#1e293b',
  }
})

export default Treatments