import React from 'react';
import { View, Text } from 'react-native';
import ScreenProps from '../../types/screen';
import styles from './styles';

const ProjectDetailScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Project Detail</Text>
    </View>
  );
};



export default ProjectDetailScreen;