import React, { useEffect, useState } from 'react';
import { Appearance, FlatList, Pressable, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../../context';
import { Project } from '../../components';
import { supabase } from '../../util';
import { ScreenProps } from '../../types';
import { commonStyles } from '../../common';

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      title: 'Projects',
      headerLeft: () => (
        <Pressable onPress={() => navigation.navigate('User')}>
          <MaterialIcons name="account-circle" size={24} color={theme.color} />
        </Pressable>
      ),
    });
  }, [theme]);

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
        const { data, error } = await supabase.from('projects').select('*');
        if (error) {
          console.log({ error });
          throw error;
        }
        if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
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
    </SafeAreaView>
  );
};

export default Home;
