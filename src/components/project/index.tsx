import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@/context";
import { domainIconMapping } from "@/util";
import { ProjectProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";
import ThemeText from "../theme-text";

const Project: React.FC<ProjectProps> = ({
  title,
  image,
  domains,
  description,
  onPress,
}) => {
  const { theme } = useTheme();
  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={[styles.body, { backgroundColor: theme.cardBackground }]}>
        <ThemeText text={title} style={styles.title} />
        <View style={[commonStyles.row, commonStyles.mt10]}>
          {domains.map((domain, index) => {
            return (
              <Text style={[styles.domains]} key={index}>
                <FontAwesome5 name={domainIconMapping[domain]} size={15} />{" "}
                {domain}
              </Text>
            );
          })}
        </View>
        <ThemeText text={description} style={styles.description} />
      </View>
    </Pressable>
  );
};

export default Project;
