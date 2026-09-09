import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Divider, Header, Project, ThemeText, WebAppShell } from "@/components";
import { useAsync, useSystemThemeSync } from "@/hooks";
import { getProjects } from "@/services";
import { useTheme } from "@/context";
import { ScreenProps, Project as ProjectData } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

function keyExtractor(item: ProjectData) {
  return item?.id.toString();
}

function renderItemSeparator() {
  return <Divider style={styles.itemSeparator} />;
}

function ProjectListItem({ item }: { item: ProjectData }) {
  const navigation = useNavigation<any>();

  return (
    <Project
      onPress={() => navigation.navigate("ProjectDetails", { id: item.id })}
      title={item.title}
      image={item.banner_url}
      domains={item.domains}
    />
  );
}

function renderProjectItem({ item }: { item: ProjectData }) {
  return <ProjectListItem item={item} />;
}

function Home({ navigation }: ScreenProps) {
  const { data: projects, error } = useAsync<ProjectData[]>(getProjects, []);

  const { theme } = useTheme();

  useSystemThemeSync();

  const onLeftPress = useCallback(() => {
    navigation.navigate("User");
  }, [navigation]);

  return (
    <WebAppShell active="Home">
      <SafeAreaView style={[commonStyles.flex, { backgroundColor: theme.screenBackground }]}>
        <StatusBar style={theme.theme === "dark" ? "light" : "dark"} />
        <Header title="Home" leftIcon="account" onLeftPress={onLeftPress} />
        {error !== "" ? (
          <View style={[commonStyles.flex, commonStyles.center, commonStyles.horizontalPadding]}>
            <ThemeText style={commonStyles.errorText} text={error} />
          </View>
        ) : (
          <FlatList
            style={commonStyles.horizontalPadding}
            data={projects}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderItemSeparator}
            renderItem={renderProjectItem}
          />
        )}
      </SafeAreaView>
    </WebAppShell>
  );
}

export default Home;
