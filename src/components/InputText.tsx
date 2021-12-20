import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { TextInput } from "react-native-paper";

import { CustomDarkTheme } from "@app/themes/theme";

interface Props {
  editable?: boolean;
  input?: string | null;
  title?: string;
  placeholder?: string;
  isSecure?: boolean;
  value?: string;
  keyboardType?: "numeric";
  onChangeText(value: string): void;
  style?: Object;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  styleContainer?: Object;
  textContentType?: string;
  label?: string;
  autoCapitalize?: "none" | "words";
}

const InputText: React.FC<Props> = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode={"outlined"}
        label={props.label}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={CustomDarkTheme.colors.placeholder}
        secureTextEntry={props.isSecure}
        editable={props.editable}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        maxLength={props.maxLength}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        style={styles.input}
        theme={{
          colors: { primary: "white" },
          roundness: 15,
        }}
        underlineColor={CustomDarkTheme.colors.primary}
        autoCapitalize={props.autoCapitalize}
      >
        {props.input}
      </TextInput>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "95%",
    marginBottom: 10,
  },
  input: {
    backgroundColor: CustomDarkTheme.colors.surface,
    color: CustomDarkTheme.colors.text,
    borderRadius: 20,
  },
});
