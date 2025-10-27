import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome, Fontisto } from '@expo/vector-icons';


export default function EditProfileScreen(props) {
  // Support receiving profile either via direct prop or via navigation route params.
  const profile = props.profile ?? props.route?.params?.profile ?? EditProfileScreen.defaultProps.profile;
  const onSave = props.onSave ?? EditProfileScreen.defaultProps.onSave;

  const [name, setName] = useState(profile?.name ?? '');
  const [birthDate, setBirthDate] = useState(profile?.birthDate ?? '');
  const [gender, setGender] = useState(profile?.gender ?? 'male'); // 'male' or 'female'
  const [mobile, setMobile] = useState(profile?.mobile ?? '');
  const [email, setEmail] = useState(profile?.email ?? '');

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>My Account</Text>
        {/* <TouchableOpacity>
          <Text style={styles.headerEditText}>Edit</Text>
        </TouchableOpacity> */}
      </View>
      {/* Full Name */}
      <View style={styles.row}>
        <FontAwesome name="user-o" size={22} color="#e1413a" />
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.value}
          placeholder="Full Name"
        />
      </View>
      {/* Birth Date */}
      <View style={styles.row}>
        <Fontisto name="date" size={22} color="#e1413a" />
        <Text style={styles.label}>Birth Date</Text>
        <TextInput
          value={birthDate}
          onChangeText={setBirthDate}
          style={styles.value}
          placeholder="DD-MM-YYYY"
        />
      </View>
      {/* Gender Selection */}
      <View style={styles.genderRow}>
        <FontAwesome name="male" size={28} color={gender === 'male' ? "#e1413a" : "#9e9e9e"} />
        <TouchableOpacity style={styles.genderButton} onPress={() => setGender('male')}>
          <Text style={[styles.genderText, gender === 'male' && styles.genderSelected]}>Male</Text>
        </TouchableOpacity>
        <FontAwesome name="female" size={28} color={gender === 'female' ? "#e1413a" : "#9e9e9e"} />
        <TouchableOpacity style={styles.genderButton} onPress={() => setGender('female')}>
          <Text style={[styles.genderText, gender === 'female' && styles.genderSelected]}>Female</Text>
        </TouchableOpacity>
      </View>
      {/* Mobile */}
      <View style={styles.row}>
        <FontAwesome name="mobile-phone" size={22} color="#e1413a" />
        <Text style={styles.label}>Mobile</Text>
        <TextInput
          value={mobile}
          onChangeText={setMobile}
          style={styles.value}
          keyboardType="phone-pad"
          placeholder="Mobile Number"
        />
      </View>
      {/* Email */}
      <View style={styles.row}>
        <Fontisto name="email" size={22} color="#e1413a" />
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.value}
          keyboardType="email-address"
          placeholder="Email Address"
        />
      </View>
      {/* Save Button */}
      <TouchableOpacity style={styles.saveBtn} onPress={() => onSave({ name, birthDate, gender, mobile, email })}>
        <Text style={styles.saveBtnText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

// Default props for demonstration
EditProfileScreen.defaultProps = {
  profile: {
    name: 'karthik Karthik',
    birthDate: '01-01-9999',
    gender: 'male',
    mobile: '9999999999',
    email: 'karthik@gmail.com'
  },
  onSave: (data) => console.log('Saved:', data),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    paddingTop: StatusBar.currentHeight,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  headerText: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  headerEditText: {
    color: '#e1413a',
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 15,
    color: '#999',
    marginLeft: 12,
    width: 80,
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    marginLeft: 8,
    borderBottomWidth: 0,
  },
  editBtn: {
    color: '#e1413a',
    marginLeft: 10,
    fontSize: 16,
  },
  genderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  genderButton: {
    marginHorizontal: 8,
  },
  genderText: {
    fontSize: 15,
    color: '#999',
  },
  genderSelected: {
    color: '#e1413a',
    fontWeight: 'bold',
  },
  saveBtn: {
    margin: 28,
    paddingVertical: 12,
    backgroundColor: '#e1413a',
    alignItems: 'center',
    borderRadius: 7,
  },
  saveBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
