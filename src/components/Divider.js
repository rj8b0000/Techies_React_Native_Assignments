import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Divider = ({ size, color, width }) => {
  return (
    <View
      style={{
        borderTopWidth: size,
        borderColor: color,
        width: width,
        alignSelf: 'center',
      }}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({});
