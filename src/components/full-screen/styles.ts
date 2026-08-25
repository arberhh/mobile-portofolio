import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  closeButton: {
    padding: 16,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
  },
});
export default styles;
