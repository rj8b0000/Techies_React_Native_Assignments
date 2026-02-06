import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Entypo from '@react-native-vector-icons/entypo';
import { useNavigation } from '@react-navigation/native';

const NavBar = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        padding: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
      }}
    >
      <Entypo
        name="chevron-thin-left"
        size={24}
        color="black"
        style={{ marginRight: '3%' }}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
        {title}
      </Text>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({});
