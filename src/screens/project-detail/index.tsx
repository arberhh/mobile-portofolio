import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { supabase } from '../../util/supabase'; // Assuming you have a supabase client instance
import { Slideshow } from '../../components';
import ScreenProps from '../../types/screen';
import { useTheme } from '../../context';
import { commonStyles } from '../../common';
import styles from './styles';

const ProjectDetailScreen: React.FC<ScreenProps> = ({ navigation, route }) => {
  const { theme } = useTheme();
  const { id } = route.params;
  const [project, setProject] = useState<any>(null); // Replace 'any' with the type of your project object
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase // Replace 'supabase' with your Supabase client instance
          .from('projects')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          // Handle error
          console.error(error);
        } else {
          setProject(data);
        }
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error(error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return (
    <SafeAreaView style={[commonStyles.flex, { backgroundColor: theme.screenBackground }]}>
      {loading ? <View style={[commonStyles.flex, commonStyles.center]}><ActivityIndicator size={'large'} color={theme.color} /></View> :
        <View style={[commonStyles.flex, commonStyles.mt10]}>
          <Slideshow images={project.images} />
          <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
            <Text style={[commonStyles.title, { color: theme.color }]}>{project.title}</Text>
            <Text style={[commonStyles.subtitle, { color: theme.color }]}>{project.long_description}</Text>
            <View>
              <View style={[commonStyles.row, commonStyles.alignCenter, commonStyles.mt20, commonStyles.mb10]}>
                <Ionicons name='settings-sharp' size={24} color={theme.color} />
                <Text style={[commonStyles.text400, { color: theme.color }]}> Tools and Technologies</Text>
              </View>
              {
                project.tools_technologies.map((tool: string) => <Text style={[commonStyles.subtitle, { color: theme.color }]} key={tool}>• {tool}</Text>)
              }
            </View>
            <View>
              <View style={[commonStyles.row, commonStyles.alignCenter, commonStyles.mt20, commonStyles.mb10]}>
                <MaterialCommunityIcons name="brain" size={24} color={theme.color} />
                <Text style={[commonStyles.text400, { color: theme.color }]}> Non technical contribution</Text>
              </View>
              {
                project.non_technical_contributions.map((contribution: string) => <Text style={[commonStyles.subtitle, { color: theme.color }]} key={contribution}>• {contribution}</Text>)
              }
            </View>
            <View>
              <View style={[commonStyles.row, commonStyles.alignCenter, commonStyles.mt20, commonStyles.mb10]}>
                <MaterialIcons name="computer" size={24} color={theme.color} />
                <Text style={[commonStyles.text400, { color: theme.color }]}> Technical contribution</Text>
              </View>
              {
                project.techical_contributions.map((contribution: string) => <Text style={[commonStyles.subtitle, { color: theme.color }]} key={contribution}>• {contribution}</Text>)
              }
            </View>
          </ScrollView>
        </View>
      }
    </SafeAreaView>
  );
};

export default ProjectDetailScreen;