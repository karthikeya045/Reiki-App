import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

const lightPalette = {
  background: '#f7f9fc',
  surface: '#ffffff',
  primary: '#1c96c5',
  primaryStrong: '#20a7db',
  accent: '#6c5ce7',
  text: '#1e293b',
  textMuted: '#475569',
  border: '#cbd5e1',
};

const darkPalette = {
  background: '#0b1220',
  surface: '#0f172a',
  primary: '#38bdf8',
  primaryStrong: '#22d3ee',
  accent: '#a78bfa',
  text: '#e2e8f0',
  textMuted: '#94a3b8',
  border: '#334155',
};

export const ThemeContext = createContext({ tokens: lightPalette, mode: 'light' });

export const ThemeProvider = ({ children }) => {
  const system = useColorScheme();
  const pref = useSelector(state => state.preferences?.theme || 'system');
  const mode = pref === 'system' ? (system || 'light') : pref;
  const tokens = mode === 'dark' ? darkPalette : lightPalette;
  const value = useMemo(() => ({ tokens, mode }), [tokens, mode]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeTokens = () => useContext(ThemeContext).tokens;
export const useThemeMode = () => useContext(ThemeContext).mode;


