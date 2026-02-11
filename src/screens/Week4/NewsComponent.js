import { Image, StyleSheet, Text, View } from 'react-native';
import Divider from '../../components/Divider';
import Feather from '@react-native-vector-icons/feather';

import React from 'react';

const NewsComponent = ({ item }) => {
  const formattedDate = isoDate => {
    const date = new Date(isoDate).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return date;
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardSource}>{item?.source?.name}</Text>
        <Text style={styles.cardAuthor}>{item?.author}</Text>
      </View>
      <Divider width={'96%'} color={'#d6ceceff'} size={0.2} />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText} numberOfLines={2}>
          {item?.title}
        </Text>
      </View>
      <Divider width={'96%'} color={'#d6ceceff'} size={0.2} />
      <View>
        <Text style={styles.descriptionText} numberOfLines={3}>
          {item?.description}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={
            item?.urlToImage
              ? { uri: item?.urlToImage }
              : require('../../../assets/car_image.jpg')
          }
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.spacer} />
      <Divider width={'96%'} color={'#d6ceceff'} size={0.2} />
      <View style={styles.footerContainer}>
        <View style={styles.dateContainer}>
          <Feather name="calendar" size={18} color={'#5d5d5dff'} />
          <Text style={styles.dateText}>
            {formattedDate(item?.publishedAt)}
          </Text>
        </View>
        <View style={styles.readMoreContainer}>
          <Text style={styles.readMoreText}>Read More</Text>
          <Feather name="chevron-right" size={18} color={'#2d45d1ff'} />
        </View>
      </View>
    </View>
  );
};

export default NewsComponent;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: '#595959ff',
    borderRadius: 15,
    height: 440,
    backgroundColor: '#fff',
  },
  cardHeader: {
    padding: '2%',
  },
  cardSource: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardAuthor: {
    fontSize: 14,
  },
  titleContainer: {
    padding: '2%',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    padding: '2%',
  },
  imageContainer: {
    width: '100%',
    height: '40%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  spacer: {
    height: '2%',
  },
  footerContainer: {
    justifyContent: 'space-between',
    flex: 1,
    padding: '2%',
    flexDirection: 'row',
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  dateText: {
    fontSize: 14,
    color: '#616161ff',
  },
  readMoreContainer: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'center',
  },
  readMoreText: {
    fontSize: 14,
    color: '#2d45d1ff',
  },
});
