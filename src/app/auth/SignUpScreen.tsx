import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";

import { useTheme } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// @ts-ignore: Unreachable code error
import { BarPasswordStrengthDisplay } from "react-native-password-strength-meter";

import Container from "@components/Container";
import InputText from "@components/InputText";
import InputIcon from "@components/InputIcon";
import Button from "@components/Button";

import { styles } from "@assets/styles/styles";
import { Routes } from "../../types";

type Props = NativeStackScreenProps<Routes>;

const SignUpScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();

  const [icon, setIcon] = React.useState({
    eye: "eye-off",
    isSecure: true,
  });

  function handleButton() {
    if (icon.eye == "eye") {
      setIcon({
        eye: "eye-off",
        isSecure: true,
      });
    } else if (icon.eye == "eye-off") {
      setIcon({
        eye: "eye",
        isSecure: false,
      });
    }
  }

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [user, setUser] = React.useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  return (
    <Container>
      <View style={styles.container}>
        <Text style={[styles.title, { marginTop: 50 }]}>Seja Bem Vindo!</Text>
        <InputText
          label={"Nome do usuário sem espaços"}
          autoCapitalize={"none"}
          value={user.username || ""}
          onChangeText={(value) =>
            setUser({
              ...user,
              username: value.trim(),
            })
          }
        />
        <InputText
          onChangeText={(value) =>
            setUser({
              ...user,
              name: value,
            })
          }
          label={"Primeiro e último nome"}
          value={user.name || ""}
        />
        <InputText
          onChangeText={(value) =>
            setUser({
              ...user,
              email: value,
            })
          }
          value={user.email || ""}
          label={"Email"}
          autoCapitalize={"none"}
        />
        <InputIcon
          label={"Senha"}
          value={user.password || ""}
          onChangeText={(value) =>
            setUser({
              ...user,
              password: value,
            })
          }
          isSecure={icon.isSecure}
          right={icon.eye}
          // @ts-ignore: Unreachable code error
          onPress={() => handleButton()}
        />
        <View style={{ backgroundColor: colors.background, width: "90%" }}>
          <BarPasswordStrengthDisplay
            password={user.password}
            labelVisible={false}
            barColor={colors.background}
          />
        </View>
        <InputText
          onChangeText={(value) => setConfirmPassword(value)}
          label={"Confirmar senha"}
          autoCapitalize={"none"}
          isSecure
        />
        <Button
          onPress={() => console.log("register")}
          color={colors.primary}
          title={"Registrar"}
          icon={"account-check"}
        />
        <View style={[styles.forgotPassword]}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.label}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default SignUpScreen;
