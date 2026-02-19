import { StyleSheet, Text, View } from 'react-native';
import Divider from '../../../../../assets/Divider.svg';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';

const HeaderComponent = ({ title }) => {
  return (
    <View style={styles.centeredHeader}>
      <Text style={styles.checkoutText}>{title}</Text>
      <Divider />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  centeredHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '4%',
  },
  checkoutText: {
    fontFamily: FontFamily.regular,
    fontSize: 20,
    letterSpacing: 4,
  },
});
