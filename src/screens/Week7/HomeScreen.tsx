import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../globalStyles';
import NavBar from '../../components/NavBar';
import { auth } from '../../config/firebaseConfig';
import { logout } from '../../service/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from './types';

const HomeScreen = () => {
  type HomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamsList,
    'HomeScreen'
  >;
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      Alert.alert('Error');
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <NavBar title={'HomeScreen'} />
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
