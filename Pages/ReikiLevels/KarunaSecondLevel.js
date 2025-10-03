import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';

const images = [
  require('../../assets/symbols/Gnosa.jpg'),
  require('../../assets/symbols/Kriya.jpg'),
  require('../../assets/symbols/Lava.jpg'),
  require('../../assets/symbols/Shanti.jpg'),
  require('../../assets/symbols/OM.jpg'),
  require('../../assets/symbols/Johre.jpg'),
  require('../../assets/symbols/MotorZanoon.jpg'),
  require('../../assets/symbols/Hosanna.jpg'),
];

const symbolNames = [
  "Gnosa",
  "Kriya",
  "Lava",
  "Shanti",
  "OM",
  "Johre",
  "Motor Zanon",
  "Hosanna",
];

const symbolDescriptions = [
  "Gnosa – Enhances learning, insight, and integration; supports brain balancing for study, exams, and bridging knowledge with intuition.",
  "Kriya – Deep physical clearing and detox; accelerates recovery, supports organ cleansing, and improves energy flow through the body.",
  "Lava – Purifying transformative fire; burns away stagnant energy and helps transmute anger or intense emotions into creative force.",
  "Shanti – Peace and tranquility; calms the nervous system, invites harmony, and eases conflict within and around you.",
  "OM – Primordial vibration and unity; aligns with the universal field, centers the mind, and elevates meditation practices.",
  "Johre – Clears heavy energies, cords, and attachments; brightens the aura and raises one’s vibration after dense encounters.",
  "Motor Zanon – Repairs etheric tears and seals the aura; useful post-surgery, post-trauma, and after intense energetic work.",
  "Hosanna – Uplifts the heart and spirit; restores hope, faith, and gratitude, especially in periods of challenge.",
];

const symbolBulletPoints = [
  [
    "Supports memory, focus, and integration",
    "Balances hemispheres for study and logic+intuition",
    "Place over brow during learning/reading",
    "Use before exams and complex problem-solving",
  ],
  [
    "Accelerates detox and physical healing",
    "Clears blocks in meridians and chakras",
    "Great for chronic fatigue and sluggish flow",
    "Combine with OM to stabilize after clearing",
  ],
  [
    "Transforms heavy emotions into creative energy",
    "Good for anger release and vitality",
    "Use over liver/solar plexus for purifying",
    "Pair with Shanti to soothe after intensity",
  ],
  [
    "Restores peace and serenity",
    "Eases insomnia and anxious loops",
    "Send to rooms/relationships for harmony",
    "Wonderful at session end to integrate",
  ],
  [
    "Centers meditation and mantra practice",
    "Harmonizes field with universal vibration",
    "Clears mental noise and aligns intention",
    "Place above crown or in room before work",
  ],
  [
    "Removes cords and dense residues",
    "Brightens aura and raises vibration",
    "Use after crowds or heavy sessions",
    "Follow with Motor Zanon to seal the field",
  ],
  [
    "Repairs and seals tears in the aura",
    "Excellent post-trauma or surgery",
    "Strengthens boundaries and containment",
    "Finish with OM or Shanti for smoothness",
  ],
  [
    "Uplifts mood and restores hope",
    "Invites gratitude and devotion of the heart",
    "Helpful during setbacks or grief",
    "Place at heart and crown for uplift",
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
