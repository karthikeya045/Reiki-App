import { View, Text, StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { signOutThunk } from '../../Pages/store/slices/authSlice'
import { setTheme } from '../../Pages/store/slices/preferencesSlice'

const Profile = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const user = useSelector(state => state.auth.user);
  const theme = useSelector(state => state.preferences.theme);
  return (
    <View style={{paddingTop: StatusBar.currentHeight + 10, paddingHorizontal: 16}}>
      <Text style={{fontSize: 18, marginBottom: 16}}>{t('common.profile')}</Text>
      <Text style={{marginBottom: 8}}>Email: {user?.email || '—'}</Text>
      <TouchableOpacity onPress={() => dispatch(signOutThunk())} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.langRow}>
        <TouchableOpacity onPress={() => i18n.changeLanguage('en')} style={styles.langBtn}>
          <Text style={styles.langText}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => i18n.changeLanguage('te')} style={styles.langBtn}>
          <Text style={styles.langText}>TE</Text>
        </TouchableOpacity>
      </View>
      <Text style={{marginTop:16, marginBottom:6}}>Theme</Text>
      <View style={styles.langRow}>
        <TouchableOpacity onPress={() => dispatch(setTheme('system'))} style={[styles.langBtn, theme==='system' && {opacity:0.85}]}> 
          <Text style={styles.langText}>System</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(setTheme('light'))} style={[styles.langBtn, theme==='light' && {opacity:0.85}]}> 
          <Text style={styles.langText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(setTheme('dark'))} style={[styles.langBtn, theme==='dark' && {opacity:0.85}]}> 
          <Text style={styles.langText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoutButton: {
    marginTop: 16,
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center'
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700'
  },
  langRow: { flexDirection: 'row', gap: 10, marginTop: 16 },
  langBtn: { backgroundColor: '#3b82f6', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  langText: { color: '#fff', fontWeight: '700' }
})

export default Profile