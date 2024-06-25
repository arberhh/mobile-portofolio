import React, { FC, useEffect, useState } from "react";
import { ActivityIndicator, Image, Linking, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import { SocialIcon, Tech } from "@/components";
import { useTheme } from "@/context";
import { ScreenProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";
import { getProfile } from "@/services/supabase-service";

// Define gradient colors for light mode
const lightGradientColors = ["#F7F7F8", "#808080", "#1C1C1C"];

// Define gradient colors for dark mode
const darkGradientColors = ["#1C1C1C", "#808080", "#F7F7F8"];

const User: FC<ScreenProps> = () => {
  const { theme } = useTheme();
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const handleLinkedInPress = () => {
    Linking.openURL(user.linkedin);
  };

  const handleGitHubPress = () => {
    Linking.openURL(user.github);
  };

  const handleGooglePress = () => {
    Linking.openURL(`mailto:${user.email}`);
  };

  const gradientColors =
    theme.theme === "dark" ? lightGradientColors : darkGradientColors;

  return (
    <LinearGradient
      colors={gradientColors}
      start={[0, 0]}
      end={[0, 1]}
      style={[
        loading && commonStyles.alignCenter,
        styles.container,
        { backgroundColor: theme.screenBackground },
      ]}
    >
      {error !== "" ? (
        <View style={[commonStyles.flex, commonStyles.center]}>
          <Text style={[commonStyles.errorText, { color: theme.color }]}>
            {error}
          </Text>
        </View>
      ) : loading ? (
        <ActivityIndicator size={"large"} color={theme.color} />
      ) : (
        <>
          <Image
            source={{ uri: user.profile_picture }}
            style={styles.profileImage}
          />
          {/* About Me Section */}
          <View style={styles.section}>
            <Text style={[commonStyles.title, { color: theme.color }]}>
              <FontAwesome
                name="pencil-square-o"
                size={22}
                color={theme.text}
                style={styles.icon}
              />
              About Me
            </Text>
            <Text style={[commonStyles.subtitle, { color: theme.color }]}>
              {user.intro}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[commonStyles.title, { color: theme.color }]}>
              <MaterialCommunityIcons
                name="palette"
                size={22}
                color={theme.color}
              />{" "}
              Main Technologies
            </Text>
            <View style={[commonStyles.rowOnly, commonStyles.aligLeft]}>
              {user.main_techs.map((tech: string, index: number) => (
                <Tech theme={theme} key={index} title={tech} />
              ))}
            </View>
          </View>
          {/* Contact Icons */}
          <View style={styles.contactIcons}>
            <SocialIcon
              onPress={handleLinkedInPress}
              iconType="linkedin"
              color={theme.color}
            />
            <SocialIcon
              onPress={handleGitHubPress}
              iconType="github"
              color={theme.color}
            />
            <SocialIcon
              onPress={handleGooglePress}
              iconType="google"
              color={theme.color}
            />
          </View>
        </>
      )}
    </LinearGradient>
  );
};

export default User;
