import React from "react";
import { Modal, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { CustomDarkTheme } from "@app/themes/theme";

interface Props {
  visible: boolean;
}
const LoaderScreen: React.FC<Props> = (props) => {
  return (
    <Modal transparent visible={props.visible}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: CustomDarkTheme.colors.background,
        }}
      >
        <ActivityIndicator size={"large"} color={"grey"} animating={true} />
      </View>
    </Modal>
  );
};

export default LoaderScreen;
