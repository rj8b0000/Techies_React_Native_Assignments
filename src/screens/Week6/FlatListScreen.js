import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../globalStyles';
import NavBar from '../../components/NavBar';
import { getProducts } from '../../service/userService';

const FlatListScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  useEffect(() => {
    fetchProducts(count, count != 5);
  }, [count]);
  const fetchProducts = async (count, isLoadMore = false) => {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      const response = await getProducts(count);
      console.log('Response: ', response);
      if (response?.status == 200) {
        const newData = response?.data || [];
        setProducts(prev => [...prev, ...newData]);
        if (newData.length === 0) {
          setHasMore(false);
        }
      }
    } catch (err) {
      if (err.response) {
        console.log('Server Logged with: ', err.response.status);
        setError('Something went wrong. Please try again later');
      } else if (err.request) {
        console.log('Requst error', err.request);
        console.log('No response recieved');
        setError('Something went wrong. Please try again later');
      } else {
        console.log('Axios error: ', err.message);
        setError('Something went wrong. Please try again later');
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };
  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }
  const loadMore = () => {
    if (!loadingMore && hasMore) {
      setLoadingMore(true);
      setCount(prev => prev + 5);
    }
  };
  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <View style={{ padding: 10, alignItems: 'center' }}>
        <ActivityIndicator
          size={'large'}
          color={'#5e90d7'}
          style={{ margin: 10 }}
        />
      </View>
    );
  };
  const ProductComponent = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          width: '100%',
          padding: '2%',
          borderRadius: 10,
          flexDirection: 'row',
          height: 150,
        }}
      >
        <View style={{ width: '30%' }}>
          <Image
            source={{ uri: item.images[0] }}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View
          style={{
            width: '70%',
            paddingLeft: '5%',
            justifyContent: 'space-around',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
          <Text style={{ fontSize: 14, color: 'gray' }}>
            {item.description.length > 90
              ? item.description.substring(0, 90) + '...'
              : item.description}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: '2%' }}>
            ${item.price}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <NavBar title="Products List" />
      <View style={styles.localContainer}>
        {error ? (
          <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
        ) : null}
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ProductComponent item={item} />}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          onRefresh={fetchProducts}
          refreshing={loading}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No data available</Text>
          }
          ListFooterComponent={renderFooter}
          initialNumToRender={5}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatListScreen;

const styles = StyleSheet.create({
  localContainer: {
    padding: '4%',
  },
  emptyText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10%',
  },
});
