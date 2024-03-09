import * as React from 'react';
import { Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { Home, ProjectDetail, User } from '../screens';
import { useTheme } from '../context';
import { commonStyles } from '../common';


const Stack = createNativeStackNavigator();

function Navigation() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: theme.screenBackground,
      },
      headerTintColor: theme.color,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitleVisible: false,
      headerRight: () => (
        <Pressable onPress={toggleTheme}>
          <MaterialIcons name="dark-mode" size={24} color={theme.color} />
        </Pressable>
      ),
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetail} />
      <Stack.Screen options={{ headerTitle: "Arber" }} name="User" component={User} />
    </Stack.Navigator>
  );
}

export default Navigation;