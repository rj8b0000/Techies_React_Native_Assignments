import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/Navigator/MainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MainNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
