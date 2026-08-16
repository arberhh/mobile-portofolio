import { TextStyle } from "react-native";

interface ThemeTextProps {
  style: TextStyle;
  text: string;
  color?: string;
  numberOfLines?: number;
}

export default ThemeTextProps;
