import { StatusBar } from "expo-status-bar";
import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider } from "./contexts/AuthContext";
import reducer from "./store/reducer";

import { CustomDarkTheme } from "@app/themes/theme";

import AuthRoutes from "./routes/auth.routes";

const store = createStore(reducer);

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={CustomDarkTheme}>
          <AuthProvider>
            <SafeAreaProvider>
              <AuthRoutes />
            </SafeAreaProvider>
          </AuthProvider>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
