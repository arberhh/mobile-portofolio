import React, { useEffect } from "react";
import { Appearance, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Divider, Project, ThemeText } from "@/components";
import { useProjects } from "@/hooks";
import { useTheme } from "@/context";
import { ScreenProps } from "@/types";
import { commonStyles } from "@/common";

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  const { projects, error } = useProjects();

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme !== theme.theme) {
        toggleTheme();
      }
    });
  }, [navigation]);

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
            <Divider style={{ marginHorizontal: -20 }} />
          )}
          renderItem={({ item }) => {
            return (
              <Project
                onPress={() => onPressProject(item.id)}
                title={item.title}
                image={item.banner_url}
                domains={item.domains}
                description={item.short_description}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
