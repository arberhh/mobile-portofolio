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
    borderRadius: 80, // Assuming the profile picture is circular
    height: 160,
    marginBottom: 20,
    width: 160,
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