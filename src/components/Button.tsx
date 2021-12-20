import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button as Btn } from "react-native-paper";

interface Props {
  title?: string;
  color?: string;
  onPress(): void;
  buttonSytle?: Object;
  disabled?: boolean;
  icon?: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <Btn
        mode="contained"
        onPress={props.onPress}
        color={props.color}
        uppercase={false}
        style={styles.button}
        icon={props.icon}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </Btn>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    width: "100%",
    padding: 2,
    borderRadius: 20,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    width: "100%",
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
