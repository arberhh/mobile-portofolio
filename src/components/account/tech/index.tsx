import React from "react";
import { Text, View } from "react-native";
import { TechProps } from "@/types";
import { BLACK_COLOR, WHITE_COLOR } from "@/constants";
import styles from "./styles";

export default function Tech({ title, theme }: TechProps) {
  return (
    <View
      style={[styles.keyTechnologyContainer, { backgroundColor: theme.color }]}
    >
      <Text
        style={[
          styles.keyTechnology,
          { color: theme.theme === "dark" ? BLACK_COLOR : WHITE_COLOR },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}
