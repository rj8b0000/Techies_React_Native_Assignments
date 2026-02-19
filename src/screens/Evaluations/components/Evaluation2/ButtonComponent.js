import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontFamily } from '../../../../theme/typography';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ButtonComponent = ({ title, Icon, screenName }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.addShippingContainer}
      onPress={() => (screenName ? navigation.navigate(screenName) : null)}
    >
      <Text style={styles.addShippingText}>{title}</Text>
      {Icon}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  addShippingContainer: {
    height: 48,
    backgroundColor: '#F9F9F9',
    marginTop: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    paddingHorizontal: '6%',
  },
  addShippingText: {
    fontFamily: FontFamily.regular,
    fontSize: 16,
    color: '#555555',
    fontWeight: '600',
    lineHeight: 22,
  },
});
