import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { supabase } from '../../util/'; // Assuming you have a supabase configuration file
import Project from '../../components/project';

const Home: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from('projects').select('*');
        if (error) {
          console.log({ error });
          throw error;
        }
        console.log({ data });
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
    <SafeAreaView>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          console.log({ item });
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
