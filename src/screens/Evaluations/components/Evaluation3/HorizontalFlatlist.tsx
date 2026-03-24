import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { recommendedData } from '../../../../data/recommendedData';
import RecommendedProductComponent from './RecommendedProductComponent';
import { FontFamily } from '../../../../theme/typography';

const HorizontalFlatlist = () => {
  return (
    <View style={{ marginVertical: '4%' }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: FontFamily.regular,
          marginVertical: '2%',
        }}
      >
        Recommended for you
      </Text>{' '}
      <FlatList
        data={recommendedData}
        renderItem={({ item }) => <RecommendedProductComponent item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default HorizontalFlatlist;

const styles = StyleSheet.create({});
