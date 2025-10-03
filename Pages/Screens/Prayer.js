import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Prayer = () => {
  const [fontSize, setFontSize] = useState(15);
  const increaseFont = () => setFontSize(size => Math.min(size + 2, 30));
  const decreaseFont = () => setFontSize(size => Math.max(size - 2, 10));

  const { t } = useTranslation();
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Text style={[styles.mainHeading, { fontSize: fontSize + 5 }]}>{t('prayer.title_te')}</Text>

        <View style={styles.section}>
          {t('prayer.principles_te', { returnObjects: true }).map((line, idx) => (
            <Text key={idx} style={[styles.bullet, { fontSize }]}>{line}</Text>
          ))}
        </View>

        <Text style={[styles.sectionHeading, { fontSize: fontSize + 1 }]}>{t('prayer.gratitude_te')}</Text>
        <View style={styles.section}>
          {t('prayer.gratitude_list_te', { returnObjects: true }).map((line, idx) => (
            <Text key={idx} style={[styles.bullet, { fontSize }]}>{line}</Text>
          ))}
        </View>

        <Text style={[styles.sectionHeading, { fontSize: fontSize + 1 }]}>{t('prayer.gratitude_en')}</Text>
        <View style={styles.section}>
          {t('prayer.gratitude_list_en', { returnObjects: true }).map((line, idx) => (
            <Text key={idx} style={[styles.bullet, { fontSize }]}>{line}</Text>
          ))}
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
