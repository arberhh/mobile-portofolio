import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80, // Assuming the profile picture is circular
    marginBottom: 20,
  },
  section: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    // Use theme text color
  },
  contactIcons: {
    flexDirection: 'row',
    marginTop: 30
  },
  icon: {
    marginHorizontal: 10,
  },
});
export default styles;