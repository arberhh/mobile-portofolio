import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context';
import Navigation from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  );
}

