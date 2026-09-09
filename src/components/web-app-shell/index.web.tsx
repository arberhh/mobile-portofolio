import { useState } from "react";
import { Pressable, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/context";
import { useIsWideWeb } from "@/hooks";
import ThemeText from "../theme-text";
import { Props } from "@/types";
import { WEB_CONTENT_WIDTH } from "@/constants";
import styles from "./styles";

interface WebAppShellProps extends Props {
  active?: "Home" | "User";
}

const SIDEBAR_WIDTH = 220;

interface SidebarLinkProps {
  label: string;
  focused: boolean;
  onPress: () => void;
  renderIcon: (color: string) => React.ReactNode;
}

function SidebarLink({ label, focused, onPress, renderIcon }: SidebarLinkProps) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);

  const color = focused ? theme.accent : theme.color;
  const backgroundColor = hovered ? theme.cardBackground : "transparent";

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={[styles.link, { backgroundColor }]}
    >
      {renderIcon(color)}
      <ThemeText style={styles.linkLabel} text={label} color={color} />
    </Pressable>
  );
}

function WebAppShell({ children, active }: WebAppShellProps) {
  const { width, height } = useWindowDimensions();
  const { theme } = useTheme();
  const navigation = useNavigation<any>();
  const isWideWeb = useIsWideWeb();

  if (!isWideWeb) {
    return <>{children}</>;
  }

  return (
    <View style={[styles.row, { width, height, backgroundColor: theme.screenBackground }]}>
      <View style={[styles.sidebar, { width: SIDEBAR_WIDTH }]}>
        <SidebarLink
          label="Home"
          focused={active === "Home"}
          onPress={() => navigation.navigate("Home")}
          renderIcon={(color) => (
            <Ionicons name={active === "Home" ? "home" : "home-outline"} size={24} color={color} />
          )}
        />
        <SidebarLink
          label="Profile"
          focused={active === "User"}
          onPress={() => navigation.navigate("User")}
          renderIcon={(color) => <MaterialIcons name="account-circle" size={24} color={color} />}
        />
      </View>
      <View style={[styles.content, { width: WEB_CONTENT_WIDTH, height, borderColor: theme.line }]}>
        {children}
      </View>
    </View>
  );
}

export default WebAppShell;
