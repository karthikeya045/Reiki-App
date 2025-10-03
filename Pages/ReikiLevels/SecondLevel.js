import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';

const images = [
  require('../../assets/symbols/dai-ko-myo.jpg'),
];

const symbolNames = ["Dai Ko Myo (Master Symbol)"];

const symbolDescriptions = [
  "Dai Ko Myo – The master symbol associated with spiritual enlightenment, deep healing, and empowering all other symbols. It’s used to heal at the soul level, align purpose, and strengthen attunements.",
];

const symbolBulletPoints = [
  [
    "Amplifies and refines all Reiki energy and symbols",
    "Supports soul-level and lineage healing",
    "Promotes spiritual growth and purpose alignment",
    "Used in attunements to empower the channel",
    "Excellent for chronic, deep-rooted patterns",
  ],
];

const SecondLevel = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SecondLevel</Text>

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

export default SecondLevel;
