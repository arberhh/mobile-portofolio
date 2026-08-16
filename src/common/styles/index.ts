import { StyleSheet } from "react-native";
import { FONT_REGULAR, FONT_MEDIUM } from "@/constants";

const styles = StyleSheet.create({
  center: { justifyContent: "center", alignItems: "center" },
  column: { flexDirection: "column" },
  errorText: { fontSize: 13, fontFamily: FONT_MEDIUM },
  flex: { flex: 1 },
  flexGrow: { flexGrow: 1 },
  horizontalLine: { flex: 1, borderBottomWidth: 1, marginHorizontal: 10 },
  horizontalMargin: { marginHorizontal: 20 },
  horizontalPadding: { paddingHorizontal: 20 },
  row: { flexDirection: "row", flexWrap: "wrap" },
  rowOnly: { flexDirection: "row" },
  spaceBetween: { justifyContent: "space-between" },
  verticalMargin: { marginVertical: 20 },
  verticalPadding: { paddingVertical: 20 },
  fullPercentage: { width: "100%", height: "100%" },
  mb10: { marginBottom: 10 },
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  title: { fontSize: 24, fontFamily: FONT_MEDIUM, marginBottom: 10 },
  subtitle: { fontSize: 13, fontFamily: FONT_REGULAR, lineHeight: 21 },
  justifyCenter: { justifyContent: "center" },
  alignCenter: { alignItems: "center" },
  aligLeft: { alignItems: "flex-start" },
  text400: { fontSize: 16, fontFamily: FONT_REGULAR },
  borderradius10: { borderRadius: 10 },
  borderRadius8: { borderRadius: 8 },
  icon: { marginHorizontal: 10 }
});

export default styles;
