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
});

export default styles;
