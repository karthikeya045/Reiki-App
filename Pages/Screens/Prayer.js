import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Prayer = () => {
  const [fontSize, setFontSize] = useState(15);
  const increaseFont = () => setFontSize(size => Math.min(size + 2, 30));
  const decreaseFont = () => setFontSize(size => Math.max(size - 2, 10));

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Text style={[styles.mainHeading, { fontSize: fontSize + 5 }]}>రేకి మార్చడర్గత సూత్రాలు</Text>

        <View style={styles.section}>
          <Text style={[styles.bullet, { fontSize }]}>1. ఈ ఒక్కరోజు నేను కృతజ్ఞతాభావంతో ఉంటాను.</Text>
          <Text style={[styles.bullet, { fontSize }]}>2. ఈ ఒక్కరోజు నేను గాలికి పడను.</Text>
          <Text style={[styles.bullet, { fontSize }]}>3. ఈ ఒక్కరోజు నేను సంతోషంగా ఉంటాను.</Text>
          <Text style={[styles.bullet, { fontSize }]}>4. ఈ ఒక్కరోజు నేను కష్టపడతాను, మంచిగా పని చేస్తాను.</Text>
          <Text style={[styles.bullet, { fontSize }]}>5. ఈ ఒక్కరోజు ప్రతి ప్రాణి జీవితాన్ని ప్రేమ, ఆదరతో చూడటానికి ప్రయత్నిస్తాను.</Text>
        </View>

        <Text style={[styles.sectionHeading, { fontSize: fontSize + 1 }]}>రేకి కృతజ్ఞతాభావము</Text>
        <View style={styles.section}>
          <Text style={[styles.bullet, { fontSize }]}>1. రేకికి కృతజ్ఞత.</Text>
          <Text style={[styles.bullet, { fontSize }]}>2. డా|| మికాయో ఉసూయ్ గారికి కృతజ్ఞత.</Text>
          <Text style={[styles.bullet, { fontSize }]}>3. డా|| హయాషి & టకాటా గారికి కృతజ్ఞత.</Text>
          <Text style={[styles.bullet, { fontSize }]}>4. శ్రీ కృష్ణ భగవానుని కృతజ్ఞతలు.</Text>
          <Text style={[styles.bullet, { fontSize }]}>5. నా తల్లిదండ్రులకు మరియు నా కుటుంబ సభ్యులకు కృతజ్ఞతలు.</Text>
          <Text style={[styles.bullet, { fontSize }]}>6. ______________కు కృతజ్ఞతలు.</Text>
          <Text style={[styles.bullet, { fontSize }]}>6. నాకు కృతజ్ఞతలు.</Text>
          <Text style={[styles.bullet, { fontSize }]}>7. రేకి కి కృతజ్ఞతలు.</Text>
        </View>

        <Text style={[styles.sectionHeading, { fontSize: fontSize + 1 }]}>REIKI'S ATTITUDE OF GRATITUDE</Text>
        <View style={styles.section}>
          <Text style={[styles.bullet, { fontSize }]}>1. Thanks to Reiki</Text>
          <Text style={[styles.bullet, { fontSize }]}>2. Thanks to Dr. Mikao Usui</Text>
          <Text style={[styles.bullet, { fontSize }]}>3. Thanks to Dr. Hayashi & Takata</Text>
          <Text style={[styles.bullet, { fontSize }]}>4. Thanks to My God Lord Sri Krishna Bhagavan</Text>
          <Text style={[styles.bullet, { fontSize }]}>5. Thanks to My Parents & Family Members</Text>
          <Text style={[styles.bullet, { fontSize }]}>6. Thanks to _____________</Text>
          <Text style={[styles.bullet, { fontSize }]}>7. Thanks to Myself</Text>
          <Text style={[styles.bullet, { fontSize }]}>8. Thanks to Reiki</Text>
          <Text style={[styles.bullet, { fontSize }]}></Text>
          <Text style={[styles.bullet, { fontSize }]}></Text>
        </View>
      </ScrollView>

      <View style={styles.fontControlContainer}>
        <TouchableOpacity onPress={decreaseFont} style={styles.fontButton}>
          <Text style={styles.fontButtonText}>A-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increaseFont} style={styles.fontButton}>
          <Text style={styles.fontButtonText}>A+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#fafcfe',
  },
  mainHeading: {
    fontWeight: 'bold',
    color: '#6c5ce7',
    textAlign: 'center',
    marginBottom: 14,
    marginTop: 10,
  },
  sectionHeading: {
    fontWeight: '700',
    color: '#1c96c5',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  section: {
    marginBottom: 12,
    paddingLeft: 6,
  },
  bullet: {
    marginVertical: 2,
    color: '#636e72',
    lineHeight: 22,
  },
  fontControlContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    gap: 10,
  },
  fontButton: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 30,
    elevation: 4,
  },
  fontButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default Prayer;
