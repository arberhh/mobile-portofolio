import React, { useCallback, useState } from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FullScreenSlideshow, Header, List, Slideshow, ThemeText } from "@/components";
import { useAsync } from "@/hooks";
import { getProject } from "@/services";
import { useTheme } from "@/context";
import { ScreenProps, Project } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

function ProjectDetailScreen({ navigation, route }: ScreenProps) {
  const { theme } = useTheme();
  const { id } = route.params;
  const fetchProject = useCallback(
    async () => (await getProject(id)) as Project,
    [id]
  );
  const { data: project, loading, error } = useAsync<Project | null>(
    fetchProject,
    null
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function openModal(img: string) {
    if (!project) return;
    setActiveIndex(project.images.indexOf(img));
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <SafeAreaView
      style={[commonStyles.flex, { backgroundColor: theme.screenBackground }]}
    >
      <Header
        title="ProjectDetails"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
      {error !== "" ? (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <ThemeText style={commonStyles.errorText} text={error} />
        </View>
      ) : loading || !project ? (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <ActivityIndicator size={"large"} color={theme.color} />
        </View>
      ) : (
        <ScrollView
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            commonStyles.flexGrow,
            commonStyles.verticalPadding,
          ]}
        >
          <FullScreenSlideshow
            visible={modalVisible}
            onClose={closeModal}
            images={project.images}
            initialIndex={activeIndex}
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
}

export default ProjectDetailScreen;
