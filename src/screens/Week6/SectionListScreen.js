import { StyleSheet, Text, View, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../../globalStyles';
import NavBar from '../../components/NavBar';
import { productData } from '../../data/productData';

const SectionListScreen = () => {
  const renderProducts = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          width: '100%',
          padding: '2%',
          borderRadius: 10,
          flexDirection: 'row',
          height: 90,
        }}
      >
        <View
          style={{
            paddingLeft: '5%',
            justifyContent: 'space-around',
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            Item Name - {item.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: '2%' }}>
            Price - ${item.price}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: '2%' }}>
            In Stock - {item.stock}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={globalStyles.container}>
      <NavBar title="Section List" />
      <View style={styles.localContainer}>
        <SectionList
          sections={productData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => renderProducts({ item })}
          renderSectionHeader={({ section }) => (
            <Text style={styles.header}>{section.title}</Text>
          )}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          ListFooterComponent={<View style={{ height: 30 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SectionListScreen;

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
  header: {
    padding: 10,
    backgroundColor: '#f4f4f4',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '5%',
  },
});
