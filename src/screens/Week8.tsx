import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Week7//HomeScreen';
import LoginScreen from './Week7/LoginScreen';
import SignUpScreen from './Week7/SignUpScreen';
import { RootStackParamsList } from './Week7/types';
import { onAuthStateChanged } from '@react-native-firebase/auth';
import { auth } from '../config/firebaseConfig';
import Loader from './Week7/Loader';
const Week8 = () => {
  const Stack = createNativeStackNavigator<RootStackParamsList>();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Week8;

const styles = StyleSheet.create({});
