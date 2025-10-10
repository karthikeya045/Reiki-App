import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';

const images = [
  require('../../assets/symbols/zonar.jpg'),
  require('../../assets/symbols/halu.jpg'),
  require('../../assets/symbols/harth.jpg'),
  require('../../assets/symbols/Rama.jpg'),
];

const symbolNames = ["Zonar", "Halu", "Harth", "Rama"];

const symbolDescriptions = [
  "Zonar – Heals at the cellular and karmic level; useful for early-life and deep-seated patterns; gently unwinds stuck energies.",
  "Halu – An intensified Zonar; excellent for dissolving illusions, psychic protection, trauma release, and clearing attachments.",
  "Harth – Heart opening and compassion; supports emotional healing, relationships, forgiveness, and self-love.",
  "Rama – Grounding, manifestation, and balancing masculine–feminine; supports boundaries, decisiveness, and stability.",
];

const symbolBulletPoints = [
  [
    "Karmic and cellular-level healing",
    "Helpful for chronic, repeating patterns",
    "Soothes inner-child and early-life wounds",
    "Combine with Harth for gentle emotional release",
  ],
  [
    "Strong psychic protection and clearing",
    "Cuts through fears, illusions, and attachments",
    "Great before sleep and after dense interactions",
    "Amplifies Zonar for deeper extraction",
  ],
  [
    "Opens heart center and nurtures compassion",
    "Supports forgiveness and relationship harmony",
    "Relieves grief, loneliness, and resentment",
    "Place over heart/thymus for emotional balance",
  ],
  [
    "Grounds and stabilizes energy",
    "Enhances manifestation and confident action",
    "Balances masculine–feminine polarity",
    "Use at base feet/hips to anchor after sessions",
  ],
];

const KarunaFirstLevel = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={images[selected]}
        style={styles.mainImage}
        resizeMode="contain"
        onError={() => console.log('Image failed to load')}
      />

      {/* Scrollable description area */}
      <ScrollView style={styles.descriptionScroll}>
        <Text style={styles.symbolName}>{symbolNames[selected]}</Text>
        <Text style={styles.symbolDesc}>{symbolDescriptions[selected]}</Text>

        <View style={styles.bulletContainer}>
          {symbolBulletPoints[selected].map((point, idx) => (
            <View key={idx} style={styles.bulletRow}>
              <Text style={styles.bullet}>{'\u2022'}</Text>
              <Text style={styles.bulletText}>{point}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Thumbnails at bottom */}
      <View style={styles.thumbnailWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.thumbContainer,
            images.length <= 3 ? { justifyContent: 'center' } : {}
          ]}
        >
          {images.map((img, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => setSelected(idx)}
              style={[
                styles.thumbWrapper,
                idx === selected && styles.selectedThumbWrapper,
              ]}
            >
              <Image
                source={img}
                style={styles.thumbnail}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f0f4f8',
    paddingTop: StatusBar.currentHeight + 10
  },
  mainImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderColor: '#334155',
    borderWidth: 1.5,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  descriptionScroll: {
    marginHorizontal: 16,
    maxHeight: 225, // max height for description scroll area
    marginBottom: 20,
  },
  symbolName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 6,
  },
  symbolDesc: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 12,
  },
  bulletContainer: {
    paddingLeft: 12,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bullet: {
    fontSize: 16,
    color: '#475569',
    marginRight: 8,
  },
  bulletText: {
    fontSize: 16,
    color: '#475569',
  },
  thumbnailWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  thumbContainer: {
    paddingHorizontal: 10,
  },
  thumbWrapper: {
    marginHorizontal: 6,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#cbd5e1',
  },
  selectedThumbWrapper: {
    borderColor: '#2563eb',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});

export default KarunaFirstLevel;
