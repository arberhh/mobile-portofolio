import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: { justifyContent: 'center', alignItems: 'center' },
  column: { flexDirection: 'column' },
  flex: { flex: 1 },
  horizontalLine: { flex: 1, borderBottomWidth: 1, marginHorizontal: 10 },
  horizontalMargin: { marginHorizontal: 20 },
  horizontalPadding: { paddingHorizontal: 20 },
  row: { flexDirection: 'row', flexWrap: 'wrap' },
  spaceBetween: { justifyContent: 'space-between' },
  verticalMargin: { marginVertical: 20 },
  verticalPadding: { paddingVertical: 20 },
  fullPercentage: { width: '100%', height: '100%' },
  mb10: { marginBottom: 10 },
  mt10: { marginTop: 10 },
  mt20: { marginTop: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, fontWeight: '400' },
  justifyCenter: { justifyContent: 'center' },
  alignCenter: { alignItems: 'center' },
  text400: { fontSize: 16, fontWeight: '400' },
});

export default styles;
