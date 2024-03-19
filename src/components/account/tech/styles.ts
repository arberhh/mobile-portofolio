import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  keyTechnologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  keyTechnologyContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 5,// Assuming this is a color representing key technologies
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-start",
  },
  keyTechnology: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400'
  },
});

export default styles;