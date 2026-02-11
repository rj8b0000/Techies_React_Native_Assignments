import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../globalStyles';
import { getNews } from '../service/userService';
import NewsComponent from './Week4/NewsComponent';
const Week4 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [news, setNews] = useState([]);
  const [count, setCount] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchNews(count);
  }, [count]);
  const fetchNews = async count => {
    try {
      const response = await getNews(count);
      if (response.status == 200) {
        const newData = response?.data?.articles || [];
        setNews(prev => [...prev, ...newData]);
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
    }
  };
  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  const loadMore = () => {
    if (!loading && hasMore) {
      fetchNews(count + 1, true);
      setCount(prev => prev + 5);
    }
  };
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size={'large'} style={{ margin: 10 }} />;
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
        {error && <Text style={styles.emptyText}>{error}</Text>}
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={({ item }) => <NewsComponent item={item} />}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          onRefresh={fetchNews}
          refreshing={loading}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No data available</Text>
          }
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
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
  emptyText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  loader: {
    marginTop: '10%',
  },
});
