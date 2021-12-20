import { StyleSheet, Platform, Dimensions } from "react-native";

import { CustomDarkTheme } from "@app/themes/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  containerAuth: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 600,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  forgotPassword: {
    width: "90%",
    alignItems: "flex-end",
    marginBottom: 10,
    marginTop: 15,
  },
  label: {
    color: CustomDarkTheme.colors.placeholder,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: Platform.OS === "ios" ? 5 : 0,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: width,
    flex: 1,
  },
  cardChat: {
    backgroundColor: CustomDarkTheme.colors.surface,
    borderRadius: 5,
    width: "100%",
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  cardLink: {
    backgroundColor: CustomDarkTheme.colors.surface,
    borderRadius: 5,
    width: "100%",
    marginBottom: 2,
  },
  title: {
    color: CustomDarkTheme.colors.text,
    marginBottom: 10,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modal: {
    margin: 10,
    backgroundColor: CustomDarkTheme.colors.surface,
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
    height: 360,
  },
  font: {
    fontSize: Platform.OS === "ios" ? 14 : 12,
  },
  card: {
    backgroundColor: CustomDarkTheme.colors.surface,
    width: "100%",
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});
