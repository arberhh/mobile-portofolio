import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context';
import Navigation from './src/navigation';
import { commonStyles } from './src/common';

export default function App() {
  return (
    <GestureHandlerRootView style={commonStyles.flex}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ThemeProvider>
            <Navigation />
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

