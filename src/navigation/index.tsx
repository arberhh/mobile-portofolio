import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, ProjectDetail, User } from "@/screens";

type RootStackParamList = {
  Home: undefined;
  ProjectDetails: { id: number };
  User: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetail} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}

export default Navigation;
