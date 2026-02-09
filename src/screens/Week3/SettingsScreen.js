import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../globalStyles';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.localContainer}>
        <View style={globalStyles.productPageHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={[globalStyles.headerTitle, { marginLeft: 20 }]}>
            Settings
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  localContainer: {
    flex: 1,
    padding: '5%',
  },
});
