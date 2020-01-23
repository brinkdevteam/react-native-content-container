import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { ContentSafeArea } from "./SafeAreaContent";

export const Content = ({ children, style }) => {
  return <ContentSafeArea>{children}</ContentSafeArea>;
};
