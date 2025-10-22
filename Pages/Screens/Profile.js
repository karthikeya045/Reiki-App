import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  // { icon: 'city', label: 'City', subtitle: 'Select your city' },
  { icon: 'bell', label: 'Notifications', badge: true },
  { icon: 'newspaper', label: 'Language' },
  { icon: 'trophy', label: 'Terms & Conditions' },
  { icon: 'pencil', label: 'Privacy Policy' },
  { icon: 'help-circle', label: 'About Us' },
  { icon: 'calendar-remove', label: 'Contact Us' },
];

const Profile = ({ onLogout }) => {
  const navigation = useNavigation();

  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // default language

  const handleLogout = () => {
    if (typeof onLogout === 'function') onLogout();
    else navigation.replace('Login');
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setLanguageDropdownVisible(false);
  };

  return (
    <View style={styles.outerContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.header}>
          <View style={styles.avatarCircle}>
            {/* Optionally add user avatar Icon here */}
          </View>
          <View style={styles.headerText}>
            <Text style={styles.profileName}>karthik</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
              <Text style={styles.editProfile}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item, idx) => {
            if (item.label === 'Language') {
              return (
                <View key={`language-${idx}`}>
                  <TouchableOpacity style={styles.menuItem} onPress={toggleLanguageDropdown} key={`lang-touch-${idx}`}>
                    <Icon name={item.icon} size={26} color="#e1413a" />
                    <View style={styles.menuText}>
                      <Text style={styles.menuLabel}>{item.label}</Text>
                      <Text style={[styles.menuSubtitle, { color: '#222' }]}>{selectedLanguage}</Text>
                    </View>
                  </TouchableOpacity>

                  {languageDropdownVisible && (
                    <View style={styles.dropdownContainer} key={`lang-dropdown-${idx}`}>
                      <TouchableOpacity
                        style={styles.radioOption}
                        onPress={() => handleLanguageSelect('Telugu')}
                        key="radio-telugu"
                      >
                        <View style={styles.radioCircle}>
                          {selectedLanguage === 'Telugu' && <View style={styles.selectedRb} />}
                        </View>
                        <Text style={styles.radioText}>Telugu</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.radioOption}
                        onPress={() => handleLanguageSelect('English')}
                        key="radio-english"
                      >
                        <View style={styles.radioCircle}>
                          {selectedLanguage === 'English' && <View style={styles.selectedRb} />}
                        </View>
                        <Text style={styles.radioText}>English</Text>
                      </TouchableOpacity>
                    </View>
                  )}
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

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
  logoutButton: {
    marginTop: 16,
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center'
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700'
  },

  dropdownContainer: {
    backgroundColor: '#f9f9f9',
    marginHorizontal: 32,
    borderRadius: 12,
    paddingVertical: 10,
    elevation: 2,
    marginTop: 6,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#e1413a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e1413a',
  },
  radioText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#222',
  },
});
