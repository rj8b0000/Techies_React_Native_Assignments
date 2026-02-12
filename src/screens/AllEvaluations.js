import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import { useNavigation } from '@react-navigation/native';
import { Evaluation } from '../data/Evaluation';

const AllEvaluations = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.mainContainer}>
        <Text style={globalStyles.heading}>AllEvaluations</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={Evaluation}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.name)}
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

export default AllEvaluations;

const styles = StyleSheet.create({
  listContainer: {
    width: '95%',
    borderColor: '#000',
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
