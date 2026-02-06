import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/NavBar';
import { globalStyles } from '../../globalStyles';

const Week1 = () => {
  const [text, setText] = useState('Click Button to Change Text');
  return (
    <SafeAreaView style={globalStyles.container}>
      <NavBar title="Static Navbar" />
      <View style={globalStyles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{text}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Apple"
            onPress={() => setText('Apple')}
            color="#ff5d4bff"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            title="Banana"
            onPress={() => setText('Banana')}
            color="#ffcc4bff"
          />
          <Button
            title="Cherry"
            onPress={() => setText('Cherry')}
            color="#ff0008ff"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Week1;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    height: '20%',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
