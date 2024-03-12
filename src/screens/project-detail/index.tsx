import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, ScrollView, Image, useWindowDimensions, Pressable } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from "react-native-reanimated-carousel";
import { FullScreenImage, List, Slideshow } from '../../components';
import { supabase } from '../../util/supabase'; // Assuming you have a supabase client instance
import { ScreenProps } from '../../types';
import { useTheme } from '../../context';
import { commonStyles } from '../../common';
import styles from './styles';

const ProjectDetailScreen: React.FC<ScreenProps> = ({ navigation, route }) => {
  const { theme } = useTheme();
  const { id } = route.params;
  const { width } = useWindowDimensions();
  const [project, setProject] = useState<any>(null); // Replace 'any' with the type of your project object
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeImage, setActiveImage] = useState<string>('');

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

  const openModal = (img: string) => {
    setActiveImage(img);
    setModalVisible(true);
  };

  const closeModal = () => {

    setModalVisible(false);
  };

  return (
    <SafeAreaView style={[commonStyles.flex, { backgroundColor: theme.screenBackground }]}>
      {loading ? <View style={[commonStyles.flex, commonStyles.center]}><ActivityIndicator size={'large'} color={theme.color} /></View> :
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} contentContainerStyle={[commonStyles.flexGrow, commonStyles.mt10, commonStyles.verticalPadding]}>
          {/* <Carousel
            vertical={false}
            autoPlayInterval={2000}
            data={project.images}
            width={width / 3}
            height={width / 2}
            style={{
              width,
            }}
            renderItem={({ index, item }: any) => (
              <Pressable onPress={() => openModal(item)} style={[commonStyles.flex, commonStyles.borderRadius8]}>
                <Image width={400} source={{ uri: item as string }} resizeMode='contain' style={[commonStyles.fullPercentage,]} />
              </Pressable>
            )}
          /> */}
          <FullScreenImage color={theme.color} visible={modalVisible} onClose={closeModal} imageUri={activeImage} />
          {/* custom slideshow */}
          <Slideshow onImagePress={openModal} images={project.images} />
          <View style={styles.body}>
            <Text style={[commonStyles.title, { color: theme.color }]}>{project.title}</Text>
            <Text style={[commonStyles.subtitle, { color: theme.color }]}>{project.long_description}</Text>
            <List items={project.tools_technologies} color={theme.color} title=" Tools and Technologies" icon={<Ionicons name='settings-sharp' size={24} color={theme.color} />} />
            <List items={project.non_technical_contributions} color={theme.color} title=" Non technical contributions" icon={<MaterialCommunityIcons name="brain" size={24} color={theme.color} />} />
            <List items={project.techical_contributions} color={theme.color} title=" technical contributions" icon={<MaterialIcons name="computer" size={24} color={theme.color} />} />
          </View>
        </ScrollView>
      }
    </SafeAreaView>
  );
};

export default ProjectDetailScreen;