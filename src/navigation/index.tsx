import * as React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { Home, ProjectDetail, User } from "@/screens";
import { useTheme } from "@/context";

type RootStackParamList = {
  Home: undefined;
  ProjectDetails: { id: number };
  User: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.screenBackground,
        },
        headerTintColor: theme.color,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackButtonDisplayMode: "minimal",
        headerRight: () => (
          <Pressable onPress={toggleTheme}>
            <MaterialIcons name="dark-mode" size={24} color={theme.color} />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerLeft: () => (
            <Pressable onPress={() => navigate("User")}>
              <MaterialIcons
                name="account-circle"
                size={24}
                color={theme.color}
              />
            </Pressable>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="ProjectDetails" component={ProjectDetail} />
      <Stack.Screen
        options={{ headerTitle: "Arber" }}
        name="User"
        component={User}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
