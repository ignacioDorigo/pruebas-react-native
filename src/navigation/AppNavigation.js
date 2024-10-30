import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// screens
import { HomeScreen } from "../screens/HomeScreen";

export function AppNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
