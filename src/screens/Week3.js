import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Week3/HomeScreen';
import SettingsScreen from './Week3/SettingsScreen';
import Ionicons from '@react-native-vector-icons/ionicons';

const Week3 = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return focused ? (
                <Ionicons name="home" size={26} color="#000" />
              ) : (
                <Ionicons name="home-outline" size={26} color="#000" />
              );
            case 'Settings':
              return focused ? (
                <Ionicons name="settings" size={26} color="#000" />
              ) : (
                <Ionicons name="settings-outline" size={26} color="#000" />
              );
          }
        },
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};

export default Week3;
