import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';
import Star from '../../../../../assets/star.svg';
import Heart from '../../../../../assets/heart.svg';

const ProductComponent = ({ item, isGrid }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: isGrid ? '48%' : '100%',
          height: isGrid ? 294 : 200,
        },
      ]}
    >
      <View
        style={[
          styles.innerContainer,
          {
            flexDirection: isGrid ? 'column' : 'row',
          },
        ]}
      >
        <View
          style={isGrid ? styles.imageWrapperGrid : styles.imageWrapperList}
        >
          <Image source={item.image} resizeMode="cover" style={styles.image} />
          {isGrid && <Heart width={18} height={18} style={styles.heartIcon} />}
        </View>
        <View
          style={[
            styles.detailsContainer,
            {
              marginTop: isGrid ? '4%' : '0%',
              width: isGrid ? '100%' : '60%',
              padding: isGrid ? '0%' : '4%',
            },
          ]}
        >
          <View>
            <Text
              style={[
                styles.nameText,
                {
                  fontSize: isGrid ? 17 : 18,
                },
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.descriptionText,
                {
                  fontSize: isGrid ? 14 : 15,
                },
              ]}
            >
              {item.description}
            </Text>
            <Text
              style={[
                styles.priceText,
                {
                  fontSize: isGrid ? 18 : 20,
                },
              ]}
            >
              ${item.price}
            </Text>
          </View>

          {!isGrid && (
            <View style={styles.listViewDetails}>
              <View style={styles.ratingContainer}>
                <Star width={18} height={18} />
                <Text style={styles.ratingText}>4.8 Ratings</Text>
              </View>
              <View style={styles.bottomRow}>
                <View style={styles.sizeContainer}>
                  <Text style={styles.sizeLabel}>Size</Text>
                  <View style={styles.sizeOptions}>
                    <View style={styles.sizeCircle}>
                      <Text style={styles.sizeText}>S</Text>
                    </View>
                    <View style={styles.sizeCircle}>
                      <Text style={styles.sizeText}>M</Text>
                    </View>
                    <View style={styles.sizeCircle}>
                      <Text style={styles.sizeText}>L</Text>
                    </View>
                  </View>
                </View>
                <Heart width={20} height={20} />
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    justifyContent: 'space-between',
  },
  nameText: {
    fontFamily: FontFamily.regular,
    color: 'black',
  },
  descriptionText: {
    fontFamily: FontFamily.regular,
    color: '#555',
  },
  priceText: {
    fontFamily: FontFamily.regular,
    color: '#DD8560',
    marginTop: '2%',
  },
  listViewDetails: {
    marginTop: '2%',
    height: '45%',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: '2%',
  },
  ratingText: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: '#000',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  sizeLabel: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
  },
  sizeOptions: {
    flexDirection: 'row',
    gap: 6,
  },
  sizeCircle: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DEDEDE',
  },
  sizeText: {
    fontSize: 12,
    fontFamily: FontFamily.regular,
    padding: '5%',
  },
  imageWrapperGrid: {
    height: 220,
    borderColor: 'green',
    width: '100%',
  },
  imageWrapperList: {
    height: 190,
    borderColor: 'red',
    width: '40%',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
