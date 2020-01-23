import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { ContentSafeArea } from "./SafeAreaContent";

export const Content = ({ children, style }) => {
  <ContentSafeArea style={[localStyles.mainContainer, style]}>{children}</ContentSafeArea>;
};

function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0
  });
}

let topPadding;
if (Platform.OS === "ios") {
  topPadding = getStatusBarHeight() + 20;
} else {
  topPadding = 22;
}
const localStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  mainContainer: {
    paddingHorizontal: 32,
    paddingTop: topPadding,
    flex: 1,
    alignItems: "center",
    borderWidth: 0
  }
});
