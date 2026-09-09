import { StyleSheet } from "react-native";
import { FONT_MEDIUM } from "@/constants";

const styles = StyleSheet.create({
  content: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  link: {
    alignItems: "center",
    borderRadius: 999,
    cursor: "pointer",
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  linkLabel: {
    fontFamily: FONT_MEDIUM,
    fontSize: 17,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  sidebar: {
    paddingRight: 16,
    paddingTop: 32,
  },
});

export default styles;
