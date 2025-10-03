import { View, Text, StatusBar, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useThemeTokens } from './theme';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const tileColors = [
  '#6c5ce7', '#0984e3', '#00b894', '#e17055', '#fd79a8',
  '#958a76ff', '#5d8277ff', '#a29bfe', '#74b9ff', '#62b9dfff',
  '#b18e1cff', '#fab1a0', '#81ecec', '#e84393',
];

const TILES_PER_ROW = 3;
const tileKeyPaths = [
  'home.reiki1','home.reiki2','home.karuna1','home.karuna2','home.healingPoints','home.timer',
  'home.techniques','home.treatments','home.prayer','home.chakra','home.tokens'
];
const tileRoutes = [
  'FirstLevel', 'SecondLevel', 'KarunaFirstLevel', 'KarunaSecondLevel', 'HealingPoints', 'ReikiTimer',
  'TechniquesList', 'Treatments', 'Prayer', 'ChakraHealing', 'Tokens'
];
const tileIcons = [
  'star', 'staro', 'hearto', 'heart', 'pluscircleo', 'clockcircleo',
  'profile', 'medicineboxo', 'smileo', 'API', 'tagso'
];

const Home = ({ navigation }) => {
  const { t } = useTranslation();
  const tokens = useThemeTokens();
  const rows = [];
  const totalTiles = tileKeyPaths.length;

  for (let i = 0; i < totalTiles; i += TILES_PER_ROW) {
    rows.push(tileColors.slice(i, i + TILES_PER_ROW));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: tokens.background }]}>
        <View style={[styles.header, { backgroundColor: tokens.surface }]}> 
          <Text style={[styles.headerTitle, { color: tokens.text }]}>{t('app.title')}</Text>
          <Text style={[styles.headerSubtitle, { color: tokens.textMuted }]}>
            {t('home.techniques')} · {t('home.treatments')} · {t('home.prayer')}
          </Text>
        </View>
        {rows.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((color, colIndex) => {
              const tileIndex = rowIndex * TILES_PER_ROW + colIndex;
              const tileName = t(tileKeyPaths[tileIndex]);
              if (!tileName) return null; // No empty tile rendered
              return (
                <Pressable
                  key={tileIndex}
                  style={({ pressed }) => [
                    styles.tile,
                    { backgroundColor: color },
                    pressed && { transform: [{ scale: 0.98 }], opacity: 0.95 }
                  ]}
                  onPress={() => {
                    const routeName = tileRoutes[tileIndex];
                    if (routeName) navigation.navigate(routeName);
                  }}
                >
                  <View style={styles.badge} />
                  <View style={styles.tileInner}>
                    <View style={styles.iconCircle}>
                      <AntDesign name={tileIcons[tileIndex]} size={18} color="#ffffff" />
                    </View>
                    <View style={styles.labelPill}>
                      <Text numberOfLines={2} style={styles.tileText}>{tileName}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#f7f9fc',
    paddingTop: StatusBar.currentHeight + 8,
  },
  header: {
    marginBottom: 10,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  tile: {
    flex: 1,
    height: 130,
    marginHorizontal: 3,
    borderRadius: 14,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    shadowColor: '#6c5ce7',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  tileInner: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flex: 1,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelPill: {
    maxWidth: '100%',
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  badge: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  tileText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    textAlignVertical: 'center',
    letterSpacing: 0.2,
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default Home;
