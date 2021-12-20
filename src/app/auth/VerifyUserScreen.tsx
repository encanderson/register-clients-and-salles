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

const VerifyUserScreen = ({ navigation, route }: Props) => {
  const { colors } = useTheme();

  const [visible, setVisible] = React.useState(false);
  const [code, setCode] = React.useState<string>("");
  // @ts-expect-error
  const _id = route.params?._id;

  const handleConfirm = async () => {
    navigation.navigate("ResetPasswordScreen");
  };
  return (
    <Container>
      <LoaderScreen visible={visible} />
      <View style={styles.containerAuth}>
        <InputText
          onChangeText={(value) => setCode(value)}
          placeholder={"Código"}
          maxLength={6}
          keyboardType={"numeric"}
        />
        <Button
          onPress={() => handleConfirm()}
          title={"Confirmar"}
          color={colors.primary}
          icon={"check"}
        />
      </View>
    </Container>
  );
};

export default VerifyUserScreen;
