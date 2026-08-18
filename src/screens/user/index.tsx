import React, { FC } from "react";
import { ActivityIndicator, Image, Linking, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { SectionHeading, SocialIcon, Tech, ThemeText } from "@/components";
import { useProfile } from "@/hooks";
import { useTheme } from "@/context";
import { ScreenProps } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

const User: FC<ScreenProps> = () => {
  const { theme } = useTheme();
  const { user, loading, error } = useProfile();

  const handleLinkedInPress = () => {
    Linking.openURL(user.linkedin);
  };

  const handleGitHubPress = () => {
    Linking.openURL(user.github);
  };

  const handleGooglePress = () => {
    Linking.openURL(`mailto:${user.email}`);
  };

  return (
    <LinearGradient
      colors={[theme.cardBackground, theme.screenBackground, theme.cardBackground]}
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
          <ThemeText text={error} style={commonStyles.errorText} />
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
            <ThemeText
              style={commonStyles.subtitle}
              text={user.intro}
              color={theme.textSecondary}
            />
          </View>
          <View style={styles.section}>
            <SectionHeading bracket="[stack]" title="Main Technologies" />
            <View style={[commonStyles.rowOnly, commonStyles.aligLeft]}>
              {(user.main_techs ?? []).map((tech: string, index: number) => (
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
