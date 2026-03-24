import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';
import Star from '../../../../../assets/star.svg';
import Heart from '../../../../../assets/heart.svg';

const ProductComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageWrapperGrid}>
          <Image source={item.image} resizeMode="cover" style={styles.image} />
          <Heart width={18} height={18} style={styles.heartIcon} />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
            <Text style={styles.priceText}>${item.price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    width: '48%',
    height: 294,
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    justifyContent: 'space-between',
    marginTop: '4%',
    width: '100%',
  },
  nameText: {
    fontFamily: FontFamily.regular,
    color: 'black',
    fontSize: 17,
  },
  descriptionText: {
    fontFamily: FontFamily.regular,
    color: '#555',
    fontSize: 14,
  },
  priceText: {
    fontFamily: FontFamily.regular,
    color: '#DD8560',
    marginTop: '2%',
    fontSize: 18,
  },
  imageWrapperGrid: {
    height: 220,
    borderColor: 'green',
    width: '100%',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
