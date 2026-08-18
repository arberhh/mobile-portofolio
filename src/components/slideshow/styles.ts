import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: "center",
    flexGrow: 1,
  },
  dot: {
    borderRadius: 4,
    height: 8,
    marginHorizontal: 4,
    width: 8,
  },
  dots: {
    flexDirection: "row",
  },
  image: {
    height: "auto",
    resizeMode: "cover",
    width: 200,
  },
  navigation: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 10
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
  slide: {
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
});
export default styles;