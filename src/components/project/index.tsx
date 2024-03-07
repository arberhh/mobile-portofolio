import React from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '../../context';
import { domainIconMapping } from '../../util';
import { ProjectProps } from '../../types';
import { commonStyles } from '../../common';
import styles from './styles';



const Project: React.FC<ProjectProps> = ({ title, image, domains, description }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={[styles.title, { color: theme.color }]}>{title}</Text>
      <View style={commonStyles.row}>
        {
          domains.map((domain, index) => {
            return <Text style={[styles.domains, { color: theme.color }]} key={index}><FontAwesome5 name={domainIconMapping[domain]} size={15} /> {domain}</Text>;
          })
        }
      </View>
      <Text style={[styles.description, { color: theme.color }]}>{description}</Text>
    </View>
  );
};



export default Project;