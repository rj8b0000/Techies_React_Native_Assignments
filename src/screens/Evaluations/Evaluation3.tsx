import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../globalStyles';
import EvaluationHeader from './components/Evaluation1/EvaluationHeader';
import FilterBar from './components/Evaluation1/FilterBar';
import ProductComponent from './components/Evaluation3/ProductComponent';
import { openFashionProducts } from '../../data/openFashionProducts';
import HorizontalFlatlist from './components/Evaluation3/HorizontalFlatlist';

const Evaluation3 = () => {
  const [isGrid, setIsGrid] = useState(true);
  const prepareData = (products: any) => {
    const result: any[] = [];
    let currentRow: any[] = [];

    products.forEach((item: any, index: number) => {
      currentRow.push(item);

      if (currentRow.length === 2) {
        result.push({ type: 'product_row', data: currentRow });
        currentRow = [];
      }

      if ((index + 1) % 6 === 0) {
        if (currentRow.length > 0) {
          result.push({ type: 'product_row', data: currentRow });
          currentRow = [];
        }
        result.push({ type: 'horizontal' });
      }
    });

    if (currentRow.length > 0) {
      result.push({ type: 'product_row', data: currentRow });
    }

    return result;
  };

  const dataWithSections = prepareData(openFashionProducts);
  return (
    <SafeAreaView style={globalStyles.container}>
      <EvaluationHeader />
      <View style={{ height: '2%' }} />
      <FilterBar isGrid={isGrid} setIsGrid={setIsGrid} />
      <View
        style={{
          width: '100%',
          paddingHorizontal: '4%',
        }}
      >
        <View style={{ height: '1%' }} />

        <FlatList
          data={dataWithSections}
          renderItem={({ item }) => {
            if (item.type === 'horizontal') {
              return <HorizontalFlatlist />;
            }
            if (item.type === 'product_row') {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  {item.data.map((product: any, idx: number) => (
                    <ProductComponent key={product.id || idx} item={product} />
                  ))}
                  {item.data.length === 1 && <View style={{ width: '48%' }} />}
                </View>
              );
            }
            return null;
          }}
          keyExtractor={(item, index) => {
            if (item.type === 'horizontal') return `horizontal-${index}`;
            if (item.type === 'product_row') return `row-${index}`;
            return index.toString();
          }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 120 }} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Evaluation3;

const styles = StyleSheet.create({});
