import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/context';
import Navigation from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}

