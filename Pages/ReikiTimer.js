import { View, Text, StatusBar, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useState } from "react";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Slider from '@react-native-community/slider';
import { useAudioPlayer } from 'expo-audio';
const audioSource = require("../assets/audio/bellsound.mp3");

const ReikiTimer = () => {
  const [intervalMinutes, setIntervalMinutes] = useState(1);
  const [durationMinutes, setDurationMinutes] = useState(1);
  const [remainingIterations, setRemainingIterations] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [slide, setSlide] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    } else {
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  };

  const audioPlayer = useAudioPlayer(audioSource);
  const playSound = () => {
    audioPlayer.seekTo(0);
    audioPlayer.play();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />   
        <View style={styles.container}>
            <CountdownCircleTimer
                isPlaying={isPlaying}
                key={remainingIterations}
                duration={duration}
                onComplete={() => {
                  playSound();
                  setTimeout(() => {
                    if (slide === remainingIterations) {
                      setIsPlaying(false); // stop if all iterations are done
                      setRemainingIterations(0);
                      setDuration(0);
                      setSlide(0);
                      setIntervalMinutes(1);
                      setDurationMinutes(1);
                    }else {
                      setRemainingIterations(remainingIterations + 1);
                    }
                  }, 5000); // Play again after 5 seconds
                  return false;
                }}
                colors={['#a0d9ef', '#62c1e5', '#20a7db', '#1c96c5', 'red']}
                colorsTime={[15, 10, 7, 5, 0]}
                size={280}
                strokeWidth={12}
            >
                {({ remainingTime }) => (
                <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
                )}
            </CountdownCircleTimer>

            <View style={styles.sliderSection}>
                <Text style={styles.label}>Time Interval</Text>
                <View style={styles.sliderRow}>
                    <Slider
                    onValueChange={(value) => setIntervalMinutes(Math.round(value))}
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={30}
                    value={intervalMinutes}
                    minimumTrackTintColor="#1c96c5"
                    maximumTrackTintColor="#ddd"
                    thumbTintColor="#20a7db"
                    disabled={isPlaying}
                    />
                    <Text style={styles.valueText}>{intervalMinutes}</Text>
                </View>
            </View>

            <View style={styles.sliderSection}>
                <Text style={styles.label}>Duration (minutes)</Text>
                <View style={styles.sliderRow}>
                    <Slider
                    value={durationMinutes}
                    onValueChange={(value) => setDurationMinutes(Math.round(value))}
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={30}
                    minimumTrackTintColor="#1c96c5"
                    maximumTrackTintColor="#ddd"
                    thumbTintColor="#20a7db"
                    disabled={isPlaying} 
                    />
                    <Text style={styles.valueText}>{durationMinutes}</Text>
                </View>
            </View>

            <View style={styles.buttonRow}>
            {!isPlaying ? (
                <TouchableOpacity
                onPress={() => {
                    setSlide(intervalMinutes);
                    setRemainingIterations(1);
                    setDuration(durationMinutes * 60);
                    setIsPlaying(true); // start running
                }}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                onPress={() => setIsPlaying(false)}  // stop timer
                style={[styles.button, { backgroundColor: 'red' }]}
                >
                <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity
                onPress={() => {
                setIsPlaying(false);       // stop
                setRemainingIterations(0); // reset counters
                setDuration(0);            // reset timer
                setSlide(0);
                setIntervalMinutes(1);
                setDurationMinutes(1);
                }}
                disabled={isPlaying}
                style={[styles.button, { backgroundColor: isPlaying ? '#666' : '#20a7db' }]}
            >
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            </View>

            <Text style={styles.remainingText}>
                Remaining: {slide - remainingIterations}
            </Text>
        </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: StatusBar.currentHeight + 20
  },
  timerText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#1c96c5',
  },
  sliderSection: {
    width: '100%',
    marginVertical: 16,
    alignItems: 'center',
    paddingTop: 20
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  sliderRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
 },
  slider: {
    width: '90%',
    height: 40,
  },
  valueText: {
    fontSize: 16,
    marginTop: 6,
    color: '#111',
  },
buttonSection: {
    alignItems: 'center',
 },
buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 12,
  paddingTop: 18
},
button: {
  backgroundColor: '#20a7db',
  paddingVertical: 14,
  borderRadius: 12,
  width: 120,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 4,
},

buttonText: {
  fontSize: 18,
  fontWeight: '600',
  color: '#fff',
},
  remainingText: {
    fontSize: 16,
    marginTop: 20,
    color: '#444',
  },
});

export default ReikiTimer;
