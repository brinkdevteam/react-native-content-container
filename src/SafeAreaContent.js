import React from "react";
import { View, Platform, StyleSheet } from "react-native";

export const ContentSafeArea = ({ children, style }) => {
  <View style={[localStyles.mainContainer, style]}>{children}</View>;
};

function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0
  });
}

function isIphoneX() {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 || dimen.width === 896)
  );
}

function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
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
