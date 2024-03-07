import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface ProjectProps {
  title: string;
  image: string;
  domains: string[];
  description: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, domains, description }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        {
          domains.map((domain, index) => {
            return <Text style={styles.domains} key={index}>{domain}</Text>;
          })
        }
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

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
  },
});

export default Project;