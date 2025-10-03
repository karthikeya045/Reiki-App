import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Home from './Home';
import Explore from './Screens/Explore';
import Meditation from './Screens/Meditation';
import Profile from './Screens/Profile';
import ReikiTimer from './Screens/ReikiTimer';
import Settings from './Screens/Settings';
import FirstLevel from './ReikiLevels/FirstLevel';
import SecondLevel from './ReikiLevels/SecondLevel';
import KarunaFirstLevel from './ReikiLevels/KarunaFirstLevel';
import KarunaSecondLevel from './ReikiLevels/KarunaSecondLevel';
import HealingPoints from './Screens/HealingPoints';
import Treatments from './Screens/Treatments';
import Prayer from './Screens/Prayer';
import ChakraHealing from './Screens/ChakraHealing';
import Tokens from './Screens/Tokens';
import TechniquesList from './Screens/TechniquesList';
import LoginPage from './Screens/LoginPage';
import { useSelector } from 'react-redux';
import { useThemeTokens, useThemeMode } from './theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeMain"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="FirstLevel"
      component={FirstLevel}
      options={{ headerShown: false, title: 'Reiki 1st Level' }}
    />
    <Stack.Screen
      name="SecondLevel"
      component={SecondLevel}
      options={{ headerShown: false, title: 'Reiki 2nd Level' }}
    />
    <Stack.Screen
      name="ReikiTimer"
      component={ReikiTimer}
      options={{ headerShown: false, title: 'Reiki Timer' }}
    />
    <Stack.Screen
      name="KarunaFirstLevel"
      component={KarunaFirstLevel}
      options={{ headerShown: false, title: 'Karuna 1st Level' }}
    />
    <Stack.Screen
      name="KarunaSecondLevel"
      component={KarunaSecondLevel}
      options={{ headerShown: false, title: 'Karuna 2nd Level' }}
    />
    <Stack.Screen
      name="TechniquesList"
      component={TechniquesList}
      options={{ headerShown: false, title: 'Techniques' }}
    />
    <Stack.Screen
      name="HealingPoints"
      component={HealingPoints}
      options={{ headerShown: false, title: '24 Healing Points' }}
    />
    <Stack.Screen
      name="Treatments"
      component={Treatments}
      options={{ headerShown: false, title: 'Treatments' }}
    />
    <Stack.Screen
      name="Prayer"
      component={Prayer}
      options={{ headerShown: false, title: 'Prayer' }}
    />
    <Stack.Screen
      name="ChakraHealing"
      component={ChakraHealing}
      options={{ headerShown: false, title: 'Chakra Healing' }}
    />
    <Stack.Screen
      name="Tokens"
      component={Tokens}
      options={{ headerShown: false, title: 'Tokens' }}
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#fdfdfd' },
      tabBarActiveTintColor: '#6c5ce7',
      tabBarInactiveTintColor: '#636e72',
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="search" size={size} color={color} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Meditation"
      component={Meditation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="eye" size={size} color={color} />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const Splash = () => null;

const Navigator = () => {
  const { isLoading, isSignedIn } = useSelector(state => state.auth);
  const tokens = useThemeTokens();
  const mode = useThemeMode();

  return (
    <NavigationContainer theme={
      mode === 'dark'
        ? { ...DarkTheme, colors: { ...DarkTheme.colors, background: tokens.background, card: tokens.surface, text: tokens.text, border: tokens.border, primary: tokens.primary } }
        : { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: tokens.background, card: tokens.surface, text: tokens.text, border: tokens.border, primary: tokens.primary } }
    }>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : !isSignedIn ? (
          <Stack.Screen name="Login" component={LoginPage} />
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
