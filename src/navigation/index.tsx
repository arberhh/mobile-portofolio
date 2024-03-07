import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, User } from '../screens';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

export default Navigation;