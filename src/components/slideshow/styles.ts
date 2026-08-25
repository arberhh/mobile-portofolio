import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  dots: {
    gap: 6,
  },
  frame: {
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
    padding: 8,
  },
  image: {
    borderRadius: 8,
    height: "100%",
    width: "100%",
  },
  navigation: {
    alignItems: "center",
    bottom: 12,
    flexDirection: "row",
    justifyContent: "center",
    left: 0,
    paddingHorizontal: 20,
    position: "absolute",
    right: 0,
  },
  navigationLeft: {
    left: 20,
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
  navigationRight: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
});
export default styles;