import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';

const ProductComponent = ({ item }) => {
  return (
    <View
      style={{
        width: '48%',
        marginTop: '2%',
        height: 294,
      }}
    >
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ height: 220 }}>
          <Image
            source={item.image}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View style={{ marginTop: '4%' }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FontFamily.regular,
              color: 'black',
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: FontFamily.regular,
              color: '#555',
            }}
          >
            {item.description}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: FontFamily.regular,
              color: '#DD8560',
              marginTop: '2%',
            }}
          >
            ${item.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({});
