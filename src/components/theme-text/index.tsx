import React from "react";
import { Text } from "react-native";
import { useTheme } from "@/context";
import ThemeTextProps from "@/types/theme-text";

export default function ThemeText({ style, text }: ThemeTextProps) {
  const { theme } = useTheme();
  return <Text style={[style, { color: theme.color }]}>{text}</Text>;
}
