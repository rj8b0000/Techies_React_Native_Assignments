import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontFamily } from '../../../../theme/typography';
import React from 'react';

const BottomButton = ({ Icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.bottomBar} onPress={onPress}>
      {Icon}
      <Text style={styles.bottomBarText}> {title}</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  bottomBar: {
    // position: 'absolute',
    // bottom: 0,
    height: '8%',
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarText: {
    fontFamily: FontFamily.regular,
    fontSize: 18,
    letterSpacing: 2,
    color: '#fff',
  },
});
