import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './i18n';

// language will be stored as a short code: 'en' or 'te'
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Load saved language on mount
  useEffect(() => {
    let mounted = true;
    const loadLanguage = async () => {
      try {
        const saved = await AsyncStorage.getItem('@app_language');
        if (mounted && saved) setLanguage(saved);
      } catch (e) {
        // ignore load error
        console.log('Failed to load language', e);
      }
    };
    loadLanguage();
    return () => { mounted = false; };
  }, []);

  // Keep i18next in sync whenever language changes or at startup
  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language).catch((e) => console.log('i18n changeLanguage error', e));
    }
  }, [language]);

  // Persist language when it changes
  useEffect(() => {
    const save = async () => {
      try {
        await AsyncStorage.setItem('@app_language', language);
      } catch (e) {
        console.log('Failed to save language', e);
      }
    };
    save();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
