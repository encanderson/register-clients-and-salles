import React from "react";
import { StyleSheet, View } from "react-native";

import { TextInput } from "react-native-paper";
import MaskInput from "react-native-mask-input";

import { CustomDarkTheme } from "@app/themes/theme";

interface Props {
  editable?: boolean;
  input?: string | null;
  title?: string;
  placeholder?: string;
  isSecure?: boolean;
  value: string;
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
  mask: (string | RegExp)[];
}

const InputMask: React.FC<Props> = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode={"outlined"}
        placeholder={props.placeholder}
        placeholderTextColor={CustomDarkTheme.colors.placeholder}
        secureTextEntry={props.isSecure}
        editable={props.editable}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        style={styles.input}
        theme={{ colors: { primary: "grey" }, roundness: 15 }}
        underlineColor={CustomDarkTheme.colors.primary}
        autoCapitalize={props.autoCapitalize}
        render={(prop) => (
          <MaskInput
            {...prop}
            // @ts-ignore: Unreachable code error
            value={props.value}
            onChangeText={props.onChangeText}
            mask={props.mask}
            placeholder={props.label}
          />
        )}
      />
    </View>
  );
};

export default InputMask;

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
