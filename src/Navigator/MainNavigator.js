import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllWeeks from '../screens/AllWeeks';
import AllEvaluations from '../screens/AllEvaluations';
import Week1 from '../screens/Week1';
import Week2 from '../screens/Week2';
import Week3 from '../screens/Week3';
import Week4 from '../screens/Week4';
import DetailsScreen from '../screens/Week3/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import Evaluation1 from '../screens/Evaluations/Evaluation1';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllWeeks"
        component={AllWeeks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllEvaluations"
        component={AllEvaluations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Evaluation1"
        component={Evaluation1}
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
        name="Week4"
        component={Week4}
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
