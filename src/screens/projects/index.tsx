import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useTheme } from '../../context';
import { Divider, Project } from '../../components';
import { supabase } from '../../util';

const Home: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const { theme } = useTheme();

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
    <SafeAreaView style={{ backgroundColor: theme.background }}>
      <FlatList
        data={projects}
        // ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(item) => item.id.toString()}
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
