import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../../context';
import { Project } from '../../components';
import { supabase } from '../../util';
import { ScreenProps } from '../../types';
import { commonStyles } from '../../common';

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  const [projects, setProjects] = useState<any[]>([]);
  const { theme } = useTheme();

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

  return (
    <SafeAreaView style={[commonStyles.flex, commonStyles.horizontalPadding, { backgroundColor: theme.screenBackground }]}>
      <FlatList
        data={projects}
        // ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(item) => item?.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Project
              title={item.title}
              image={item.banner_url}
              domains={item.domains}
              description={item.short_description}
            />
          )
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
