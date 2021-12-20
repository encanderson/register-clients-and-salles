import React from "react";

import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import ForgotPassword from "./ForgotPassword";
import VerifyUserScreen from "./VerifyUserScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
      <Stack.Screen name={"SignUpScreen"} component={SignUpScreen} />
      <Stack.Screen name={"ForgotPassword"} component={ForgotPassword} />
      <Stack.Screen name={"VerifyUserScreen"} component={VerifyUserScreen} />
      <Stack.Screen
        name={"ResetPasswordScreen"}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
