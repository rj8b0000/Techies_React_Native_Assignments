import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const DetailsScreen = ({ route }) => {
  const { items } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.localContainer}>
          <View style={globalStyles.productPageHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={[globalStyles.headerTitle, { marginLeft: 20 }]}>
              Product Details
            </Text>
          </View>

          <View
            style={[
              globalStyles.productPageImageContainer,
              { backgroundColor: '#f5ebff' },
            ]}
          >
            <Image source={items.image} style={globalStyles.productPageImage} />
          </View>

          <View style={globalStyles.productPageInfo}>
            <Text style={globalStyles.productPageName}>{items.name}</Text>
            <Text style={globalStyles.productPagePrice}>${items.price}</Text>
            <Text style={globalStyles.productPageDescription}>
              {items.description}
            </Text>
          </View>

          <View style={globalStyles.productPageFooter}>
            <TouchableOpacity style={globalStyles.productPageBuyButton}>
              <Text style={globalStyles.productPageBuyButtonText}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  localContainer: {
    flex: 1,
    padding: '5%',
  },
});
