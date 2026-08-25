import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/context";
import ThemeText from "../theme-text";
import styles from "./styles";

interface HeaderProps {
  title: string;
  leftIcon: "back" | "account";
  onLeftPress: () => void;
}

function Header({ title, leftIcon, onLeftPress }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.screenBackground }]}>
      <Pressable style={styles.iconButton} onPress={onLeftPress} hitSlop={12}>
        {leftIcon === "back" ? (
          <Ionicons name="chevron-back" size={24} color={theme.color} />
        ) : (
          <MaterialIcons name="account-circle" size={24} color={theme.color} />
        )}
      </Pressable>
      <ThemeText
        style={styles.title}
        text={title}
        color={theme.accent}
        numberOfLines={1}
      />
      <Pressable style={styles.iconButton} onPress={toggleTheme} hitSlop={12}>
        <MaterialIcons name="dark-mode" size={24} color={theme.color} />
      </Pressable>
    </View>
  );
}

export default Header;
