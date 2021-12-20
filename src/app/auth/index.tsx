import React from "react";

import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
