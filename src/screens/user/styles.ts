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
  header: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    // Use theme text color
  },
  aboutMe: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutMeText: {
    fontSize: 16,
    lineHeight: 24,
  },
  contactIcons: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
});
export default styles;