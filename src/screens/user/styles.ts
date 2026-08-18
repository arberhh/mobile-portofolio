import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  contactIcons: {
    flexDirection: "row",
    marginTop: 30
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80, // Assuming the profile picture is circular
    marginBottom: 20,
  },
  section: {
    alignSelf: "flex-start",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    // Use theme text color
  },
});
export default styles;