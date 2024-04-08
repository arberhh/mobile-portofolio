import React, { useEffect, useState } from 'react';
import { Appearance, FlatList, SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Project } from '../../components';
import { getProjects } from '../../services';
import { useTheme } from '../../context';
import { ScreenProps } from '../../types';
import { commonStyles } from '../../common';

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme !== theme.theme) {
        toggleTheme()
      }
    })
  }, [navigation]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects() || [];
        setProjects(projects);
      } catch (error: any) {
        console.error('Error fetching project:', error);
        setError(error.message)
      }
    };

    fetchProjects();
  }, []);

  const onPressProject = (id: number) => {
    navigation.navigate('ProjectDetails', { id });
  };

  return (
    <SafeAreaView style={[commonStyles.flex, commonStyles.horizontalPadding, { backgroundColor: theme.screenBackground }]}>
      <StatusBar backgroundColor={theme.screenBackground} style={theme.theme === 'dark' ? 'light' : 'dark'} />
      {error !== '' ? <View style={[commonStyles.flex, commonStyles.center]}><Text style={[commonStyles.errorText, { color: theme.color }]}>{error}</Text></View> :
        <FlatList
          data={projects}
          // ItemSeparatorComponent={() => <Divider />}
          keyExtractor={(item) => item?.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Project
                onPress={() => onPressProject(item.id)}
                title={item.title}
                image={item.banner_url}
                domains={item.domains}
                description={item.short_description}
              />
            );
          }}
        />
      }
    </SafeAreaView>
  );
};

export default Home;
