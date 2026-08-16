import { StyleSheet } from "react-native";
import { FONT_MEDIUM } from "@/constants";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  body: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: FONT_MEDIUM,
    marginBottom: 4,
    marginVertical: 10,
  },
  domains: {
    fontSize: 13,
    fontFamily: FONT_MEDIUM,
    marginRight: 7,
  },
});
export default styles;
