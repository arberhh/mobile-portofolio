import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  image: {
    width: 200,
    height: 'auto',
    resizeMode: 'cover',
  },
  navigationLeft: {
    position: 'absolute',
    top: '50%',
    left: 20,
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
  navigationRight: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  dots: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'black',
  },
});
export default styles;