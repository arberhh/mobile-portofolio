import { StyleSheet } from "react-native";
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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