import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';

const images = [
  require('../../assets/symbols/Gnosa.jpg'),
  require('../../assets/symbols/Kriya.jpg'),
  require('../../assets/symbols/Lava.jpg'),
  require('../../assets/symbols/Shanti.jpg'),
  require('../../assets/symbols/OM.jpg'),
  // require('../../assets/symbols/Swasthik.jpg'),
  // require('../../assets/symbols/Sati.jpg'),
  require('../../assets/symbols/Johre.jpg'),
  require('../../assets/symbols/MotorZanoon.jpg'),
  // require('../../assets/symbols/MidasStar.jpg'),
  // require('../../assets/symbols/Vasudha.jpg'),
  require('../../assets/symbols/Hosanna.jpg'),
  // require('../../assets/symbols/Integrate.jpg'),
  // require('../../assets/symbols/Desire.jpg'),
  // require('../../assets/symbols/AOEA.jpg'),
  // require('../../assets/symbols/OMAR.jpg'),
  // require('../../assets/symbols/Mary.jpg'),
  // require('../../assets/symbols/Trinity.jpg'),
  // require('../../assets/symbols/StillPoint.jpg'),
  // require('../../assets/symbols/Vel.jpg'),
  // require('../../assets/symbols/ReikiCircle.jpg'),
];

const symbolNames = ["Gnosa", "Kriya", "Zonar", "Shanti", "OM", "Swasthik", "Sati", "Johre", "MotorZanoon", "MidasStar",
  "Vasudha", "Hosanna", "Integrate", "Desire", "AOEA", "OMAR", "Mary", "Trinity", "StillPoint", "Vel", "ReikiCircle"];

const symbolDescriptions = [
  "Halu symbol relates to strength and endurance.",
  "Harth symbol represents unity and balance.",
  "Zonar symbol signifies innovation and creativity.",
];

const symbolBulletPoints = [
  [
    "Represents physical strength",
    "Associated with resilience",
    "Symbolizes endurance",
    "Used in warrior ceremonies",
    "Represents physical strength",
    "Associated with resilience",
    "Symbolizes endurance",
  ],
  [
    "Symbolizes harmony",
    "Represents community unity",
    "Used in peace rituals",
    "Balances energies",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
  [
    "Represents creative force",
    "Symbol for innovation",
    "Used by artists and thinkers",
    "Encourages new ideas",
  ],
];

const KarunaSecondLevel = () => {
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
              <Text style={{textAlign:'center'}}>{symbolNames[idx]}</Text>
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

export default KarunaSecondLevel;
