import { StyleSheet } from "react-native";
import { FONT_MEDIUM } from "@/constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: 52,
    paddingHorizontal: 8,
  },
  iconButton: {
    alignItems: "center",
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  title: {
    flex: 1,
    fontFamily: FONT_MEDIUM,
    fontSize: 17,
    textAlign: "center",
  },
});
export default styles;
