import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './src/context';
import Navigation from './src/navigation';
import { commonStyles } from './src/common';

export default function App() {
  return (
    <GestureHandlerRootView style={commonStyles.flex}>
      <NavigationContainer>
        <ThemeProvider>
          <Navigation />
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

