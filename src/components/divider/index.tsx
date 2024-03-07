import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../context';
import { commonStyles } from '../../common';

const Divider = () => {
  const { theme } = useTheme();
  return <View style={[commonStyles.horizontalLine, { borderBottomColor: theme.line }]} />;
};

export default Divider;