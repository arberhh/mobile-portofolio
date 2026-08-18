import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Divider, Project, ThemeText } from "@/components";
import { useProjects, useSystemThemeSync } from "@/hooks";
import { useTheme } from "@/context";
import { ScreenProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  const { projects, error } = useProjects();

  const { theme } = useTheme();

  useSystemThemeSync();

  const onPressProject = (id: number) => {
    navigation.navigate("ProjectDetails", { id });
  };

  return (
    <SafeAreaView
      style={[
        commonStyles.flex,
        commonStyles.horizontalPadding,
        { backgroundColor: theme.screenBackground },
      ]}
    >
      <StatusBar style={theme.theme === "dark" ? "light" : "dark"} />
      {error !== "" ? (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <ThemeText style={commonStyles.errorText} text={error} />
        </View>
      ) : (
        <FlatList
          data={projects}
          keyExtractor={(item) => item?.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <Divider style={styles.itemSeparator} />
          )}
          renderItem={({ item }) => {
            return (
              <Project
                onPress={() => onPressProject(item.id)}
                title={item.title}
                image={item.banner_url}
                domains={item.domains}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
