import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../globalStyles';
import Ionicons from '@react-native-vector-icons/ionicons';
import { products } from '../../data/products';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const bgColors = ['#FFDDC1', '#C1FFD7', '#C1D7FF', '#FFC1C1'];
  const renderProducts = ({ item, index }) => {
    const backgroundColor = bgColors[index % bgColors.length];

    return (
      <TouchableOpacity
        style={globalStyles.productContainer}
        onPress={() => {
          navigation.navigate('Details', { items: item });
        }}
      >
        <View
          style={[
            globalStyles.productImageContainer,
            { backgroundColor: backgroundColor },
          ]}
        >
          <Image source={item.image} style={globalStyles.productImage} />
          <TouchableOpacity style={globalStyles.heartIcon}>
            <Ionicons name="heart-outline" color={'red'} size={22} />
          </TouchableOpacity>
        </View>
        <View style={globalStyles.productDetails}>
          <Text style={globalStyles.productName}>{item.name}</Text>
          <View style={globalStyles.priceContainer}>
            <Text style={globalStyles.productPrice}>${item.price}</Text>
            <TouchableOpacity style={globalStyles.buyButton}>
              <Text style={globalStyles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.localContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <View style={globalStyles.recommendationSection}>
            <Text style={globalStyles.recommendationTitle}>
              Recommendations
            </Text>
            <TouchableOpacity style={globalStyles.recommendationIcon}>
              <Ionicons name="menu-outline" size={30} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={globalStyles.productList}>
            <FlatList
              data={products}
              renderItem={renderProducts}
              numColumns={2}
              keyExtractor={item => item.id}
              columnWrapperStyle={globalStyles.columnWrapper}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  localContainer: {
    flex: 1,
    padding: '5%',
  },
});
