import { StyleSheet } from "react-native";
import { FONT_MEDIUM, TRANSPARENT } from "@/constants";

const styles = StyleSheet.create({
  keyTechnologies: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  keyTechnology: {
    fontFamily: FONT_MEDIUM,
    fontSize: 12,
  },
  keyTechnologyContainer: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: TRANSPARENT,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: "center",
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});

export default styles;
