import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 12,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  domains: {
    fontSize: 14,
    color: '#888',
    marginRight: 7
  },
  description: {
    fontSize: 16,
    marginTop: 20
  },
});
export default styles;