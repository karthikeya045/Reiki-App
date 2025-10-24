import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const saved = await AsyncStorage.getItem('@app_theme');
        if (mounted && saved) setTheme(saved);
      } catch (e) {
        console.log('Failed to load theme', e);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    const save = async () => {
      try {
        await AsyncStorage.setItem('@app_theme', theme);
      } catch (e) {
        console.log('Failed to save theme', e);
      }
    };
    save();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
