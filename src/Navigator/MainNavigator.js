import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllWeeks from '../screens/AllWeeks';
import Week1 from '../screens/Week1';
import Week2 from '../screens/Week2';
import Week3 from '../screens/Week3';
import DetailsScreen from '../screens/Week3/DetailsScreen';

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
      <Stack.Screen
        name="Week2"
        component={Week2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Week3"
        component={Week3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
