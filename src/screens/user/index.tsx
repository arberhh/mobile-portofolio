import React, { FC, useEffect, useState } from 'react'
import { ActivityIndicator, Image, Linking, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { SocialIcon, Tech } from '../../components';
import { supabase } from '../../util';
import { useTheme } from '../../context'
import { commonStyles } from '../../common'
import styles from './styles';
import { ScreenProps } from '../../types';

// Define gradient colors for light mode
const lightGradientColors = ['#F7F7F8', '#808080', '#1C1C1C'];

// Define gradient colors for dark mode
const darkGradientColors = ['#1C1C1C', '#808080', '#F7F7F8'];

const User: FC<ScreenProps> = () => {
  const { theme } = useTheme();
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        let { data, error } = await supabase
          .from('profile')
          .select('*').single();

        if (error) {
          console.log({ error });
          throw error;
        }
        if (data) {
          setUser(data);
        }
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData()
  }, []);

  const handleLinkedInPress = () => {
    Linking.openURL(user.linkedin)
  }

  const handleGitHubPress = () => {
    Linking.openURL(user.github)
  };

  const handleGooglePress = () => {
    Linking.openURL(`mailto:${user.email}`);
  };

  // Set gradient colors based on the current theme mode
  const gradientColors = theme.theme === 'dark' ? lightGradientColors : darkGradientColors;

  return (
    <LinearGradient
      colors={gradientColors}
      start={[0, 0]}
      end={[0, 1]} // Set the end point to [0, 1] for a vertical gradient
      style={[loading && commonStyles.alignCenter, styles.container, { backgroundColor: theme.screenBackground }]}>
      {loading ? <ActivityIndicator size={'large'} color={theme.color} /> :
        <>
          <Image source={{ uri: user.profile_picture }} style={styles.profileImage} />
          {/* About Me Section */}
          <View style={styles.header}>
            <Text style={[styles.sectionHeader, { color: theme.color }]}><MaterialCommunityIcons name="palette" size={24} color={theme.color} /> Main Technologies</Text>
            <View style={[commonStyles.rowOnly, commonStyles.aligLeft]}>
              {
                user.main_techs.map((tech: string, index: number) => (
                  <Tech theme={theme} key={index} title={tech} />
                ))
              }
            </View>
          </View>
          <View style={styles.aboutMe}>
            <Text style={[styles.sectionHeader, { color: theme.color }]}><FontAwesome name='pencil-square-o' size={32} color={theme.text} style={styles.icon} />About Me</Text>
            <Text style={[styles.aboutMeText, { color: theme.color }]}>
              {user.intro}
            </Text>
          </View>
          {/* Contact Icons */}
          <View style={styles.contactIcons}>
            <SocialIcon onPress={handleLinkedInPress} iconType='linkedin' color={theme.color} />
            <SocialIcon onPress={handleGitHubPress} iconType='github' color={theme.color} />
            <SocialIcon onPress={handleGooglePress} iconType='google' color={theme.color} />
          </View>
        </>
      }
    </LinearGradient >
  )
}

export default User
