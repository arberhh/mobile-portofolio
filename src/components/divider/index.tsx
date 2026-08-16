import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "@/context";
import { commonStyles } from "@/common";

interface DividerProps {
  style?: StyleProp<ViewStyle>;
}

const Divider = ({ style }: DividerProps) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        commonStyles.horizontalLine,
        { borderBottomColor: theme.line },
        style,
      ]}
    />
  );
};

export default Divider;
