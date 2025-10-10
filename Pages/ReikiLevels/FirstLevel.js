import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';

const images = [
  require('../../assets/symbols/cho-ku-rei.jpg'),
  require('../../assets/symbols/sei-he-ki.jpg'),
  require('../../assets/symbols/hon-sha-ze-sho-nen.jpg'),
];

const symbolNames = ["cho-ku-rei", "sei-he-ki", "hon-sha-ze-sho-nen"];

const symbolDescriptions = [
  "Cho Ku Rei (Power Symbol) – Amplifies energy, clears spaces, protects, and accelerates healing. Often drawn at the start and end to enhance the flow.",
  "Sei He Ki (Harmony Symbol) – Balances mind and emotions, supports mental clarity, releases negative patterns, and aids emotional healing.",
  "Hon Sha Ze Sho Nen (Distance Symbol) – Connects beyond time and space for distant healing, inner-child work, and transforming past patterns.",
];

const symbolBulletPoints = [
  [
    "Boosts the intensity of Reiki flow",
    "Cleanses and charges rooms, food, water, crystals",
    "Creates energetic protection/shielding",
    "Seals treatments at the end",
    "Draw over pain areas to reduce discomfort",
    "Use at the start to ‘switch on’ power",
  ],
  [
    "Balances left–right brain and emotions",
    "Supports release of stress, anxiety, and habits",
    "Helpful for sleep and mental clarity",
    "Can be placed over solar plexus/heart for calm",
    "Pairs well after Cho Ku Rei to harmonize",
  ],
  [
    "Enables distant and across-time healing",
    "Send Reiki to future events and past memories",
    "Useful for relationship and inner-child work",
    "Connects to clients not physically present",
    "Combine with Cho Ku Rei to amplify at a distance",
  ],
];

const FirstLevel = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FirstLevel</Text>

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
    paddingTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '700',
    color: '#1e293b',
    textAlign: 'center',
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

export default FirstLevel;
