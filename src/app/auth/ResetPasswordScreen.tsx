import React from "react";
import { View, Alert } from "react-native";

import { useTheme } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// @ts-ignore: Unreachable code error
import { BarPasswordStrengthDisplay } from "react-native-password-strength-meter";

import Container from "@components/Container";
import InputIcon from "@components/InputIcon";
import Button from "@components/Button";
import InputText from "@components/InputText";
import LoaderScreen from "@components/Loader";

import { styles } from "@assets/styles/styles";
import { Routes } from "../../types/ParamsList";

type Props = NativeStackScreenProps<Routes>;

const ResetPasswordScreen = ({ navigation, route }: Props) => {
  const { colors } = useTheme();

  const [visible, setVisible] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

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

  const handleSubmit = async () => {
    if (password === "" || password !== confirmPassword) {
      Alert.alert(
        "Verificar dados",
        "Digite uma senha válida e iguas nos dois campos"
      );
    } else {
      console.log("recuperar senha");
    }
  };

  return (
    <Container>
      <LoaderScreen visible={visible} />
      <View style={styles.containerAuth}>
        <InputIcon
          onChangeText={(value) => setPassword(value)}
          placeholder={"Nova Senha"}
          isSecure={icon.isSecure}
          right={icon.eye}
          // @ts-ignore: Unreachable code error
          onPress={() => handleButton()}
          value={password}
        />
        <View style={{ backgroundColor: colors.background, width: "90%" }}>
          <BarPasswordStrengthDisplay
            password={password}
            labelVisible={false}
            barColor={colors.background}
          />
        </View>
        <InputText
          onChangeText={(value) => setConfirmPassword(value)}
          label={"Confirmar senha"}
          autoCapitalize={"none"}
          isSecure
          value={confirmPassword}
        />
        <Button
          onPress={() => handleSubmit()}
          color={colors.primary}
          title={"Salvar"}
          icon={"check"}
        />
      </View>
    </Container>
  );
};

export default ResetPasswordScreen;
