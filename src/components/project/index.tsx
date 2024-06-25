import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "@/context";
import { domainIconMapping } from "@/util";
import { ProjectProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

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
        <Text style={[styles.title, { color: theme.color }]}>{title}</Text>
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
        <Text
          style={[
            styles.description,
            commonStyles.mt10,
            { color: theme.color },
          ]}
        >
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

export default Project;
