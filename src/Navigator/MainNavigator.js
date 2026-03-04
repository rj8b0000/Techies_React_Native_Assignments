import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllWeeks from '../screens/AllWeeks';
import AllEvaluations from '../screens/AllEvaluations';
import Week1 from '../screens/Week1';
import Week2 from '../screens/Week2';
import Week3 from '../screens/Week3';
import Week4 from '../screens/Week4';
import Week5 from '../screens/Week5';
import Week6 from '../screens/Week6';
import DetailsScreen from '../screens/Week3/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import Evaluation1 from '../screens/Evaluations/Evaluation1';
import Evaluation2 from '../screens/Evaluations/Evaluation2';
import AddNewAddress from '../screens/Evaluations/screens/AddNewAddress';
import FlatListScreen from '../screens/Week6/FlatListScreen';
import SectionListScreen from '../screens/Week6/SectionListScreen';
import { Provider } from 'react-redux';
import { todoStore } from '../redux/todoStore';
import { ThemeProvider } from '../context/ThemeContext';
import Week7 from '../screens/Week7';
import Week8 from '../screens/Week8';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <ThemeProvider>
      <Provider store={todoStore}>
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
            name="AddNewAddress"
            component={AddNewAddress}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Evaluation1"
            component={Evaluation1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Evaluation2"
            component={Evaluation2}
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
            name="Week5"
            component={Week5}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Week6"
            component={Week6}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Week7"
            component={Week7}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Week8"
            component={Week8}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FlatListScreen"
            component={FlatListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SectionListScreen"
            component={SectionListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </ThemeProvider>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
