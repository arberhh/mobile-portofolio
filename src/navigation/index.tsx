import * as React from 'react';
import { Pressable, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { Home, User } from '../screens';
import { useTheme } from '../context';


const Stack = createNativeStackNavigator();

function Navigation() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: theme.background,
      },
      headerTintColor: theme.color,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <Pressable onPress={toggleTheme}>
          <MaterialIcons name="dark-mode" size={24} color={theme.color} />
        </Pressable>
      ),
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

export default Navigation;