import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  body: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingBottom: 20,
    paddingHorizontal: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    marginVertical: 10
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