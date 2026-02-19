import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontFamily } from '../../../../theme/typography';

const SubHeadingComponent = ({ title }) => {
  return <Text style={styles.checkoutLabel}>{title}</Text>;
};

export default SubHeadingComponent;

const styles = StyleSheet.create({
  checkoutLabel: {
    fontFamily: FontFamily.regular,
    fontSize: 16,
    color: '#888888',
  },
});
