import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import NavBar from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';

const Week6 = () => {
  const navigation = useNavigation();

  const ListType = [
    {
      id: 1,
      name: 'FlatList',
      navigation: 'FlatListScreen',
    },
    {
      id: 2,
      name: 'SectionList',
      navigation: 'SectionListScreen',
    },
  ];
  return (
    <SafeAreaView style={globalStyles.container}>
      <NavBar title="Week 6" />
      <View style={styles.localContainer}>
        <Text style={globalStyles.heading}>List Types</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={ListType}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.navigation)}
                style={{
                  padding: '2%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '2%',
                  backgroundColor: '#00397bff',
                  borderRadius: 10,
                }}
              >
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Week6;

const styles = StyleSheet.create({
  localContainer: {
    padding: '4%',
    alignItems: 'center',
  },
  listContainer: {
    width: '95%',
    borderColor: '#000',
    marginTop: '5%',
  },
  itemContainer: {
    padding: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2%',
    backgroundColor: '#00397bff',
    borderRadius: 10,
  },
  itemText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
