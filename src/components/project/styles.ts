import { StyleSheet } from "react-native";
import { FONT_MEDIUM } from "@/constants";

const styles = StyleSheet.create({
  body: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  domains: {
    fontFamily: FONT_MEDIUM,
    fontSize: 13,
    marginRight: 7,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 200,
    resizeMode: "cover",
    width: "100%",
  },
  title: {
    fontFamily: FONT_MEDIUM,
    fontSize: 18,
    marginBottom: 4,
    marginVertical: 10,
  },
});
export default styles;
