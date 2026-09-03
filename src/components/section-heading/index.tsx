import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@/context";
import { commonStyles } from "@/common";
import { SectionHeadingProps } from "@/types";
import styles from "./styles";

export default function SectionHeading({ bracket, title }: SectionHeadingProps) {
  const { theme } = useTheme();
  return (
    <View style={[commonStyles.mt20, commonStyles.mb10]}>
      <Text style={{ color: theme.color }}>
        <Text style={styles.bracket}>{bracket} </Text>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </Text>
    </View>
  );
}
