import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { useTheme } from "@/context";
import { ProjectProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";
import ThemeText from "../theme-text";

const Project: React.FC<ProjectProps> = ({
  title,
  image,
  domains = [],
  onPress,
}) => {
  const { theme } = useTheme();
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={[styles.body, { backgroundColor: theme.cardBackground }]}>
        <ThemeText text={title} style={styles.title} />
        <View style={[commonStyles.row, commonStyles.mt10]}>
          {domains.map((domain) => (
            <Text
              style={[styles.domains, { color: theme.accent }]}
              key={domain.id}
            >
              {`#${domain.title}`}
            </Text>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

export default Project;
