import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const tileColors = [
  '#6c5ce7', '#0984e3', '#00b894', '#e17055', '#fd79a8',
  '#958a76ff', '#5d8277ff', '#a29bfe', '#74b9ff', '#62b9dfff',
  '#b18e1cff', '#fab1a0', '#81ecec', '#e84393',
];

const TILES_PER_ROW = 3;
const tileNames = [
  'Reiki 1st Level', 'Reiki 2nd Level', 'Karuna 1', 'Karuna 2', '24 healing points', 'Reiki Timer', 
  'Techniques', 'Treatments', 'Prayer', 'Chakra Healing', 'Tokens'
];

const Home = ({ navigation }) => {
  const rows = [];
  const totalTiles = tileNames.length;

  for (let i = 0; i < totalTiles; i += TILES_PER_ROW) {
    rows.push(tileColors.slice(i, i + TILES_PER_ROW));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        {rows.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((color, colIndex) => {
              const tileIndex = rowIndex * TILES_PER_ROW + colIndex;
              const tileName = tileNames[tileIndex];
              if (!tileName) return null; // No empty tile rendered
              return (
                <TouchableOpacity
                  key={tileIndex}
                  style={[styles.tile, { backgroundColor: color }]}
                  activeOpacity={0.7}
                  onPress={() => {
                    if (tileName === 'Reiki 1st Level') navigation.navigate('FirstLevel');
                    else if (tileName === 'Reiki 2nd Level') navigation.navigate('SecondLevel');
                    else if (tileName === 'Karuna 1') navigation.navigate('KarunaFirstLevel');
                    else if (tileName === 'Karuna 2') navigation.navigate('KarunaSecondLevel');
                    else if (tileName === 'Reiki Timer') navigation.navigate('ReikiTimer');
                    else if (tileName === 'Techniques') navigation.navigate('TechniquesList');
                    else if (tileName === '24 healing points') navigation.navigate('HealingPoints');
                    else if (tileName === 'Treatments') navigation.navigate('Treatments');
                    else if (tileName === 'Prayer') navigation.navigate('Prayer');
                    else if (tileName === 'Chakra Healing') navigation.navigate('ChakraHealing');
                    else if (tileName === 'Tokens') navigation.navigate('Tokens');
                  }}
                >
                  <Text style={styles.tileText}>{tileName}</Text>
                </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  tile: {
    flex: 1,
    height: 110,
    marginHorizontal: 3,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    shadowColor: '#6c5ce7',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  tileText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});

export default Home;
