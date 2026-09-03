import React, { useCallback } from "react";
import { ActivityIndicator, Image, Linking, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { Header, SectionHeading, SocialIcon, Tech, ThemeText } from "@/components";
import { useAsync } from "@/hooks";
import { getProfile } from "@/services";
import { useTheme } from "@/context";
import { ScreenProps, Profile } from "@/types";
import { commonStyles } from "@/common";
import styles from "./styles";

function User({ navigation }: ScreenProps) {
  const { theme } = useTheme();
  // types/supabase.ts is stale (missing intro/main_techs) until the schema
  // regen lands separately, so getProfile()'s inferred shape doesn't
  // structurally overlap with Profile yet.
  const fetchProfile = useCallback(
    async () => (await getProfile()) as unknown as Profile,
    []
  );
  const { data: user, loading, error } = useAsync<Profile | null>(
    fetchProfile,
    null
  );

  function handleLinkedInPress() {
    if (user?.linkedin) Linking.openURL(user.linkedin);
  }

  function handleGitHubPress() {
    if (user?.github) Linking.openURL(user.github);
  }

  function handleGooglePress() {
    if (user?.email) Linking.openURL(`mailto:${user.email}`);
  }

  return (
    <SafeAreaView
      style={[commonStyles.flex, { backgroundColor: theme.screenBackground }]}
    >
      <Header
        title="Arber"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
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
      ) : loading || !user ? (
        <ActivityIndicator size={"large"} color={theme.color} />
      ) : (
        <>
          <Image
            source={{ uri: user.profile_picture ?? undefined }}
            style={styles.profileImage}
          />
          {/* About Me Section */}
          <View style={styles.section}>
            <ThemeText
              style={commonStyles.subtitle}
              text={user.intro ?? ""}
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
    </SafeAreaView>
  );
}

export default User;
