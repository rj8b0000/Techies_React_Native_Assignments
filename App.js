import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/Navigator/MainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MainNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
