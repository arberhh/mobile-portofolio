import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, User } from '../screens';
import { useTheme } from '../context';

const Stack = createNativeStackNavigator();

function Navigation() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: theme.background,
      },
      headerTintColor: theme.color,
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

export default Navigation;