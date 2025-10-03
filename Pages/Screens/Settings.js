import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../Pages/store/slices/preferencesSlice'
import { useThemeTokens } from '../theme'

const Settings = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tokens = useThemeTokens();
  const theme = useSelector(state => state.preferences.theme);
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <View style={{paddingTop: StatusBar.currentHeight + 10, paddingHorizontal: 16, backgroundColor: tokens.background, flex: 1}}>
      <Text style={{fontSize:18, fontWeight:'700', marginBottom: 12, color: tokens.text}}>{t('settings.title')}</Text>
      <Text style={{marginBottom: 8}}>{t('settings.language')}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => changeLang('en')} style={styles.btn}>
          <Text style={styles.btnText}>{t('settings.english')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLang('te')} style={styles.btn}>
          <Text style={styles.btnText}>{t('settings.telugu')}</Text>
        </TouchableOpacity>
      </View>

      <Text style={{marginTop: 16, marginBottom: 8, color: tokens.text}}>Theme</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => dispatch(setTheme('system'))} style={[styles.btn, theme==='system' && {opacity:0.8}]}> 
          <Text style={styles.btnText}>System</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(setTheme('light'))} style={[styles.btn, theme==='light' && {opacity:0.8}]}> 
          <Text style={styles.btnText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(setTheme('dark'))} style={[styles.btn, theme==='dark' && {opacity:0.8}]}> 
          <Text style={styles.btnText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12 },
  btn: { backgroundColor: '#3b82f6', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: '700' }
})

export default Settings