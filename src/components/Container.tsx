import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { CustomDarkTheme } from "@app/themes/theme";
interface Props {
  style?: Object;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <ScrollView>
        <View style={{ marginBottom: 60 }}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CustomDarkTheme.colors.background,
    borderColor: CustomDarkTheme.colors.background,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
});
