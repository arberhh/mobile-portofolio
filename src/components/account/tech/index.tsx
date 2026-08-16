import React from "react";
import { Text, View } from "react-native";
import { TechProps } from "@/types";
import styles from "./styles";

export default function Tech({ title, theme }: TechProps) {
  return (
    <View
      style={[
        styles.keyTechnologyContainer,
        { borderColor: theme.chipBorder },
      ]}
    >
      <Text style={[styles.keyTechnology, { color: theme.accent }]}>
        {`[${title}]`}
      </Text>
    </View>
  );
}
