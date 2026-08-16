import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@/context";
import { commonStyles } from "@/common";
import SectionHeadingProps from "@/types/section-heading";
import styles from "./styles";

export default function SectionHeading({ bracket, title }: SectionHeadingProps) {
  const { theme } = useTheme();
  return (
    <View
      style={[
        commonStyles.rowOnly,
        commonStyles.alignCenter,
        commonStyles.mt20,
        commonStyles.mb10,
      ]}
    >
      <Text style={[styles.bracket, { color: theme.color }]}>{bracket}</Text>
      <Text style={[styles.title, { color: theme.color }]}>
        {title.toUpperCase()}
      </Text>
    </View>
  );
}
