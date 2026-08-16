import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FullScreenImage, List, Slideshow, ThemeText } from "@/components";
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
          <ThemeText style={commonStyles.errorText} text={error} />
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
            <ThemeText
              style={commonStyles.title}
              text={project.title}
              color={theme.accent}
            />
            <ThemeText
              style={commonStyles.subtitle}
              text={project.long_description}
              color={theme.textSecondary}
            />
            <List
              items={project.tools_technologies}
              color={theme.textSecondary}
              title="Tools and Technologies"
              bracket="[stack]"
            />
            <List
              items={project.non_technical_contributions}
              color={theme.textSecondary}
              title="Non technical contributions"
              bracket="[contributions/non-technical]"
            />
            <List
              items={project.techical_contributions}
              color={theme.textSecondary}
              title="Technical contributions"
              bracket="[contributions/technical]"
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ProjectDetailScreen;
