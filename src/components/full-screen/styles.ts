import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    width: "80%",
    aspectRatio: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
export default styles;