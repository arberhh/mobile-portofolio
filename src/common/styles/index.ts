import { StyleSheet } from "react-native";
import { FONT_REGULAR, FONT_MEDIUM } from "@/constants";

const styles = StyleSheet.create({
  aligLeft: { alignItems: "flex-start" },
  alignCenter: { alignItems: "center" },
  borderRadius8: { borderRadius: 8 },
  borderradius10: { borderRadius: 10 },
  center: { alignItems: "center", justifyContent: "center" },
  column: { flexDirection: "column" },
  errorText: { fontFamily: FONT_MEDIUM, fontSize: 13 },
  flex: { flex: 1 },
  flexGrow: { flexGrow: 1 },
  fullPercentage: { height: "100%", width: "100%" },
  horizontalLine: { borderBottomWidth: 1, flex: 1, marginHorizontal: 10 },
  horizontalMargin: { marginHorizontal: 20 },
  horizontalPadding: { paddingHorizontal: 20 },
  icon: { marginHorizontal: 10 },
  justifyCenter: { justifyContent: "center" },
  mb10: { marginBottom: 10 },
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  row: { flexDirection: "row", flexWrap: "wrap" },
  rowOnly: { flexDirection: "row" },
  spaceBetween: { justifyContent: "space-between" },
  subtitle: { fontFamily: FONT_REGULAR, fontSize: 13, lineHeight: 21 },
  text400: { fontFamily: FONT_REGULAR, fontSize: 16 },
  title: { fontFamily: FONT_MEDIUM, fontSize: 24, marginBottom: 10 },
  verticalMargin: { marginVertical: 20 },
  verticalPadding: { paddingVertical: 20 }
});

export default styles;
