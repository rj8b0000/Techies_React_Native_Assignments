import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';
import Forward from '../../../.././../assets/Forward.svg';

const AddressComponent = ({ item }) => {
  return (
    <View style={styles.sectionInner}>
      <Text style={styles.nameText}>
        {item.firstName} {item.lastName}
      </Text>
      <View style={styles.addressRow}>
        <View style={styles.addressLeft}>
          <Text style={styles.addressText}>
            {item.address} {'\n'}
            {item.city} {item.state} {item.zipCode} {'\n'}
            {item.phone}
          </Text>
        </View>
        <View style={styles.addressRight}>
          <Forward width={24} height={24} />
        </View>
      </View>
    </View>
  );
};

export default AddressComponent;

const styles = StyleSheet.create({
  sectionInner: {
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    marginTop: '1%',
  },
  nameText: {
    fontFamily: FontFamily.regular,
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  addressRow: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '1%',
  },
  addressLeft: { width: '85%' },
  addressText: {
    fontFamily: FontFamily.regular,
    fontSize: 16,
    color: '#888888',
    fontWeight: '600',
    lineHeight: 22,
  },
  addressRight: {
    width: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
