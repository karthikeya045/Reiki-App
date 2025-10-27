import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const AboutContactUs = ({ route }) => {
  const { screenType } = route.params;

  return (
    <View style={styles.container}>
        {screenType === 'ContactUs' && (
            <>
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.content}>
                {/* Your Contact Us content here */}
                You can contact us at ...
            </Text>
            </>
        )}
        {screenType === 'AboutUs' && (
            <>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.content}>
                {/* Your About Us content here */}
                Welcome to our app. We aim to ...
            </Text>
            </>
        )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', paddingTop:StatusBar.currentHeight },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  content: { fontSize: 16, lineHeight: 22 },
});

export default AboutContactUs;