import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './src/components/NavBar';

const App = () => {
  const [text, setText] = useState('Click Button to Change Text');
  return (
    <SafeAreaView style={styles.container}>
      <NavBar title="Home" />
      <View style={styles.mainContainer}>
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

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
