import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../globalStyles';
import EvaluationHeader from './components/Evaluation1/EvaluationHeader';
import FilterBar from './components/Evaluation1/FilterBar';
import ProductComponent from './components/Evaluation1/ProductComponent';
import { openFashionProducts } from '../../data/openFashionProducts';

const Evaluation1 = () => {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <SafeAreaView style={globalStyles.container}>
      <EvaluationHeader />
      <View style={{ height: '2%' }} />
      <FilterBar isGrid={isGrid} setIsGrid={setIsGrid} />
      <View
        style={{
          borderWidth: 1,
          width: '100%',
          borderColor: 'green',
          paddingHorizontal: '4%',
        }}
      >
        <View style={{ height: '1%' }} />

        <FlatList
          key={isGrid ? 'grid' : 'list'}
          data={openFashionProducts}
          renderItem={({ item }) => (
            <ProductComponent item={item} isGrid={isGrid} />
          )}
          keyExtractor={item => item.id}
          numColumns={isGrid ? 2 : 1}
          columnWrapperStyle={
            isGrid ? { justifyContent: 'space-between' } : undefined
          }
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 120 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Evaluation1;

const styles = StyleSheet.create({});
