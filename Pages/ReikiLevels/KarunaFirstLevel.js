import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../services/ThemeContext';

const images = [
  require('../../assets/symbols/zonar.jpg'),
  require('../../assets/symbols/halu.jpg'),
  require('../../assets/symbols/harth.jpg'),
  require('../../assets/symbols/Rama.jpg'),
];

// Text content is provided via i18n resources under `karunaFirstLevelSymbols`

const KarunaFirstLevel = () => {
  const [selected, setSelected] = useState(0);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const styles = getStyles(isDark);

  return (
    <View style={styles.container}>

      {/* Scrollable description area */}
      <ScrollView style={styles.descriptionScroll}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={isDark ? '#0b1220' : '#f0f4f8'} />
        <Image
          source={images[selected]}
          style={styles.mainImage}
          resizeMode="contain"
          onError={() => console.log('Image failed to load')}
        />
        <Text style={styles.symbolName}>{t(`karunaFirstLevelSymbols.${selected}.name`)}</Text>
        <Text style={styles.symbolDesc}>{t(`karunaFirstLevelSymbols.${selected}.description`)}</Text>

        <View style={styles.bulletContainer}>
          {(t(`karunaFirstLevelSymbols.${selected}.bullets`, { returnObjects: true }) || []).map((point, idx) => (
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
              <Text style={[{textAlign:'center'}, { color: isDark ? '#e6eef8' : '#1e293b' }]}>{t(`karunaFirstLevelSymbols.${idx}.name`)}</Text>
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
    maxHeight: 625, // max height for description scroll area
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

const getStyles = (dark) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: dark ? '#071021' : '#f0f4f8',
  },
  mainImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderColor: dark ? '#334155' : '#334155',
    borderWidth: 1.5,
    borderRadius: 12,
    backgroundColor: dark ? '#0b1220' : '#fff',
    marginBottom: 12,
  },
  descriptionScroll: {
    marginHorizontal: 16,
    maxHeight: 625,
    marginBottom: 20,
  },
  symbolName: {
    fontSize: 20,
    fontWeight: '700',
    color: dark ? '#e6eef8' : '#1e293b',
    textAlign: 'center',
    marginBottom: 6,
  },
  symbolDesc: {
    fontSize: 16,
    color: dark ? '#cbd5e1' : '#475569',
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
    color: dark ? '#cbd5e1' : '#475569',
    marginRight: 8,
  },
  bulletText: {
    fontSize: 16,
    color: dark ? '#cbd5e1' : '#475569',
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
    borderColor: dark ? '#334155' : '#cbd5e1',
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
