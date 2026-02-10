import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import Header from './Week3/Header';
import NavBar from '../components/NavBar';
import Divider from '../components/Divider';
import Feather from '@react-native-vector-icons/feather';
import Ionicons from '@react-native-vector-icons/ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { getNews } from '../service/userService';
const Week4 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    fetchNews();
  }, []);
  const fetchNews = async () => {
    try {
      const response = await getNews();
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (err) {
      if (err.response) {
        console.log('Server Logged with: ', err.response.status);
        setError('Something went wrong. Please try again later');
      } else if (err.request) {
        console.log('No response recieved');
        setError('Something went wrong. Please try again later');
      } else {
        console.log('Axios error: ', err.message);
        setError('Something went wrong. Please try again later');
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView
      style={[globalStyles.container, styles.safeArea]}
      edges={['top']}
    >
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>News</Text>
      </View>
      <View style={styles.localContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList />
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardSource}>The Verge</Text>
              <Text style={styles.cardAuthor}>by Andrew. J Hawkins</Text>
            </View>
            <Divider width={'96%'} color={'#d6ceceff'} size={0.2} />

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Ferrari's first EV will an interior designed by John Ive
              </Text>
            </View>
            <Divider width={'96%'} color={'#d6ceceff'} size={0.2} />
            <View>
              <Text style={styles.descriptionText}>
                Ferrari released the first interior images of the company's
                first all-electric supercar, called the Ferrari Luce light.
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/car_image.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.spacer} />
            <Divider width={'96%'} color={'#d6ceceff'} size={0.2} />
            <View style={styles.footerContainer}>
              <View style={styles.dateContainer}>
                <Feather name="calendar" size={18} color={'#5d5d5dff'} />
                <Text style={styles.dateText}>Feb 9, 2026</Text>
              </View>
              <View style={styles.readMoreContainer}>
                <Text style={styles.readMoreText}>Read More</Text>
                <Feather name="chevron-right" size={18} color={'#2d45d1ff'} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Week4;

const styles = StyleSheet.create({
  localContainer: {
    flex: 1,
    padding: '4%',
    backgroundColor: '#f4f4fc',
  },
  safeArea: {
    backgroundColor: '#5e90d7',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e90d7',
    padding: '2%',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardContainer: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: '#595959ff',
    borderRadius: 15,
    height: 420,
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
    borderWidth: 1,
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
