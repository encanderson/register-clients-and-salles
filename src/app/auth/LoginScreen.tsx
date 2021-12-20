import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { useTheme } from "react-native-paper";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Container from "@components/Container";
import InputIcon from "@components/InputIcon";
import Button from "@components/Button";
import InputMask from "@components/MaskInput";
import LoaderScreen from "@components/Loader";

import { styles } from "@assets/styles/styles";
import { Routes } from "../../types/ParamsList";

import useAuth from "@hooks/useAuth";
import { cpf } from "@utils/mask";

type Props = NativeStackScreenProps<Routes>;

const LoginScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const { login, visible, setVisible } = useAuth();

  const [icon, setIcon] = React.useState({
    eye: "eye-off",
    isSecure: true,
  });

  function handlerButton() {
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

  const [user, setUser] = React.useState({
    cpf: "",
    password: "",
  });
  const handleLogin = async () => {
    await login(user);
  };

  const handleSignUp = () => {
    setVisible(true);

    setTimeout(() => navigation.navigate("SignUpScreen"), 300);

    setTimeout(() => setVisible(false), 1000);
  };

  return (
    <Container>
      <LoaderScreen visible={visible} />
      <View style={styles.containerAuth}>
        <InputMask
          label={"CPF"}
          keyboardType="numeric"
          onChangeText={(value) =>
            setUser({
              ...user,
              cpf: value,
            })
          }
          // @ts-ignore: Unreachable code error
          value={user.cpf || ""}
          mask={cpf}
        />
        <InputIcon
          label={"Senha"}
          onChangeText={(value) =>
            setUser({
              ...user,
              password: value,
            })
          }
          isSecure={icon.isSecure}
          right={icon.eye}
          // @ts-ignore: Unreachable code error
          onPress={() => handlerButton()}
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={[styles.label, styles.font]}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => handleLogin()}
          color={colors.primary}
          title={"Login"}
          icon={"login"}
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => handleSignUp()}>
            <Text style={[styles.label, styles.font]}>
              Ainda não tem uma conta?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginScreen;
