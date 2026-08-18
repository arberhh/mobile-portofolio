import { StyleSheet } from "react-native";
import { MODAL_OVERLAY } from "@/constants";
const styles = StyleSheet.create({
  fullScreenImage: {
    height: "100%",
    resizeMode: "contain",
    width: "100%",
  },
  modalBackground: {
    flex: 1,
  },
  modalContainer: {
    alignItems: "center",
    backgroundColor: MODAL_OVERLAY,
    flex: 1,
    justifyContent: "center",
  },
  modalContent: {
    aspectRatio: 1,
    borderRadius: 10,
    overflow: "hidden",
    width: "80%",
  },
});
export default styles;