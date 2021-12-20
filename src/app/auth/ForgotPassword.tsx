import React from "react";
import { View, Alert } from "react-native";

import { useTheme } from "react-native-paper";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Container from "@components/Container";
import InputText from "@components/InputText";
import Button from "@components/Button";
import LoaderScreen from "@components/Loader";

import { styles } from "@assets/styles/styles";
import { Routes } from "../../types/ParamsList";

type Props = NativeStackScreenProps<Routes>;

const ForgotPassword = ({ navigation }: Props) => {
  const { colors } = useTheme();

  const [user, setUser] = React.useState<string>("");
  const [visible, setVisible] = React.useState(false);

  const handleSubmit = async () => {
    // setVisible(true);
    navigation.navigate("VerifyUserScreen");
  };
  return (
    <Container>
      <LoaderScreen visible={visible} />
      <View style={styles.containerAuth}>
        <InputText
          label={"Email"}
          onChangeText={(value) => setUser(value.toLocaleLowerCase())}
          // @ts-ignore: Unreachable code error
          value={user || ""}
        />
        <Button
          onPress={() =>
            user !== "" ? handleSubmit() : navigation.navigate("LoginScreen")
          }
          color={user !== "" ? colors.primary : colors.placeholder}
          title={user !== "" ? "Recuperar Senha" : "Voltar"}
          icon={user !== "" ? "security" : "undo"}
        />
      </View>
    </Container>
  );
};

export default ForgotPassword;
