import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllWeeks from '../screens/AllWeeks';
import Week1 from '../screens/Week1';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllWeeks"
        component={AllWeeks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Week1"
        component={Week1}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
