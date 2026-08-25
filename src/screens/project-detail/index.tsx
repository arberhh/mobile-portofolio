import React, { useState } from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FullScreenImage, Header, List, Slideshow, ThemeText } from "@/components";
import { useProject } from "@/hooks";
import { useTheme } from "@/context";
import { ScreenProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

function ProjectDetailScreen({ navigation, route }: ScreenProps) {
  const { theme } = useTheme();
  const { id } = route.params;
  const { project, loading, error } = useProject(id);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeImage, setActiveImage] = useState<string>("");

  function openModal(img: string) {
    setActiveImage(img);
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
}

export default ProjectDetailScreen;
