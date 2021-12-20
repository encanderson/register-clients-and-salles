import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { User, ChilProps, AuthProps } from "../types";

interface AuthContextData {
  isLoggedIn: boolean;
  isInitialized: boolean;
  user: User | null;
  login(data: { email: string; password: string }): Promise<void>;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: ChilProps) => {
  const state = useSelector((state: AuthProps) => state.account);

  const [initialState, setinitialState] = React.useState(state);
  const [visible, setVisible] = React.useState(false);

  const login = async (data: { email: string; password: string }) => {
    console.log(data);
  };

  useEffect(() => {
    (async () => {
      setinitialState(state);
    })();
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        ...initialState,
        login,
        visible,
        setVisible,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
