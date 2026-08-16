import { StyleSheet } from "react-native";
import { FONT_MEDIUM } from "@/constants";

const styles = StyleSheet.create({
  keyTechnologies: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  keyTechnologyContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 5,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  keyTechnology: {
    fontSize: 12,
    fontFamily: FONT_MEDIUM,
  },
});

export default styles;
