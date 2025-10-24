import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Switch } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../../services/LanguageContext';

const menuItems = [
  { icon: 'newspaper', label: 'Language' },
  { icon: 'trophy', label: 'Dark Theme', subtitle: 'Enable dark interface' },
  // { icon: 'pencil', label: 'Privacy Policy' },
  { icon: 'help-circle', label: 'About Us' },
  { icon: 'calendar-remove', label: 'Contact Us' },
];

const Profile = ({ onLogout }) => {
  const navigation = useNavigation();
  const { language, setLanguage } = useContext(LanguageContext);

  const [isTelugu, setIsTelugu] = useState(language === 'te');
  useEffect(() => {
    setIsTelugu(language === 'te');
  }, [language]);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleLanguageSwitch = () => {
    const newValue = !isTelugu;
    setIsTelugu(newValue);
    const code = newValue ? 'te' : 'en';
    if (typeof setLanguage === 'function') setLanguage(code);
  };

  const toggleThemeSwitch = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const handleLogout = () => {
    if (typeof onLogout === 'function') onLogout();
    else navigation.replace('Login');
  };

  return (
    <View style={styles.outerContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.flexContainer}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.avatarCircle}></View>
            <View style={styles.headerText}>
              <Text style={styles.profileName}>karthik</Text>
              <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
                <Text style={styles.editProfile}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Menu Items */}
          <View style={styles.menuList}>
            {menuItems.map((item, idx) => {
              if (item.label === 'Language') {
                return (
                  <View key={`language-switch-${idx}`} style={styles.menuItemCompact}>
                    <Icon name={item.icon} size={26} color="#e1413a" />
                    <View style={styles.menuText}>
                      <Text style={styles.menuLabel}>{item.label}</Text>
                      <Text style={styles.menuSubtitle}>{isTelugu ? 'Telugu' : 'English'}</Text>
                    </View>
                    <Switch
                      trackColor={{ false: '#767577', true: '#e1413a' }}
                      thumbColor={isTelugu ? '#fff' : '#f4f3f4'}
                      onValueChange={toggleLanguageSwitch}
                      value={isTelugu}
                    />
                  </View>
                );
              }

              if (item.label === 'Dark Theme') {
                return (
                  <View key={`theme-${idx}`} style={styles.menuItemCompact}>
                    <Icon name={item.icon} size={26} color="#e1413a" />
                    <View style={styles.menuText}>
                      <Text style={styles.menuLabel}>{item.label}</Text>
                      <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                    </View>
                    <Switch
                      trackColor={{ false: '#767577', true: '#e1413a' }}
                      thumbColor={isDarkTheme ? '#fff' : '#f4f3f4'}
                      onValueChange={toggleThemeSwitch}
                      value={isDarkTheme}
                    />
                  </View>
                );
              }

              return (
                <TouchableOpacity key={idx} style={styles.menuItem}>
                  <Icon name={item.icon} size={26} color="#e1413a" />
                  <View style={styles.menuText}>
                    <Text style={styles.menuLabel}>{item.label}</Text>
                    {item.subtitle && <Text style={styles.menuSubtitle}>{item.subtitle}</Text>}
                  </View>
                  {item.badge && <View style={styles.badge} />}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Logout Button fixed at bottom */}
        <View style={styles.logoutButtonContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: StatusBar.currentHeight || 40,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 22,
    backgroundColor: '#fff',
  },
  avatarCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { marginLeft: 18 },
  profileName: { fontSize: 18, fontWeight: 'bold' },
  editProfile: { color: '#888', fontSize: 14 },
  menuList: { marginTop: 12 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    marginVertical: 6,
    marginHorizontal: 8,
    borderRadius: 14,
    padding: 16,
    elevation: 1,
  },
  menuText: { marginLeft: 18, flex: 1 },
  menuLabel: { fontSize: 15, color: '#222' },
  menuSubtitle: { fontSize: 13, color: '#79a' },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e1413a',
    marginLeft: 6,
  },
  logoutButtonContainer: {
    paddingVertical: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopColor: '#ddd',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700',
  },
  menuItemCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    marginVertical: 6,
    marginHorizontal: 8,
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 1,
  },
});
