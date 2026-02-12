import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.mainContainer}>
        <View style={styles.localContainer}>
          <TouchableOpacity
            style={[styles.box, { backgroundColor: '#d0054cff' }]}
            onPress={() => navigation.navigate('AllWeeks')}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
              All Weeks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, { backgroundColor: '#00489aff' }]}
            onPress={() => navigation.navigate('AllEvaluations')}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
              All Evaluation
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  localContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  box: {
    width: '45%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
