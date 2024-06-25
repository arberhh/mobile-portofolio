import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { FullScreenImage, List, Slideshow } from "@/components";
import { getProject } from "@/services";
import { useTheme } from "@/context";
import { ScreenProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

const ProjectDetailScreen: React.FC<ScreenProps> = ({ navigation, route }) => {
  const { theme } = useTheme();
  const { id } = route.params;
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const project = await getProject(id);
        setProject(project);
      } catch (error: any) {
        console.error("Error fetching project:", error);
        setError(error.message);
      } finally {
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
    <SafeAreaView
      style={[commonStyles.flex, { backgroundColor: theme.screenBackground }]}
    >
      {error !== "" ? (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <Text style={[commonStyles.errorText, { color: theme.color }]}>
            {error}
          </Text>
        </View>
      ) : loading ? (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <ActivityIndicator size={"large"} color={theme.color} />
        </View>
      ) : (
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            commonStyles.flexGrow,
            commonStyles.mt10,
            commonStyles.verticalPadding,
          ]}
        >
          <FullScreenImage
            color={theme.color}
            visible={modalVisible}
            onClose={closeModal}
            imageUri={activeImage}
          />
          {/* custom slideshow */}
          <Slideshow onImagePress={openModal} images={project.images} />
          <View style={styles.body}>
            <Text style={[commonStyles.title, { color: theme.color }]}>
              {project.title}
            </Text>
            <Text style={[commonStyles.subtitle, { color: theme.color }]}>
              {project.long_description}
            </Text>
            <List
              items={project.tools_technologies}
              color={theme.color}
              title=" Tools and Technologies"
              icon={
                <Ionicons name="settings-sharp" size={24} color={theme.color} />
              }
            />
            <List
              items={project.non_technical_contributions}
              color={theme.color}
              title=" Non technical contributions"
              icon={
                <MaterialCommunityIcons
                  name="brain"
                  size={24}
                  color={theme.color}
                />
              }
            />
            <List
              items={project.techical_contributions}
              color={theme.color}
              title=" Technical contributions"
              icon={
                <MaterialIcons name="computer" size={24} color={theme.color} />
              }
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ProjectDetailScreen;
