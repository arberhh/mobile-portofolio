import { ReactNode } from "react";
import { TextStyle } from "react-native";
import { Theme } from "../themes";
import { Database } from "./supabase";

type Props = {
  children: ReactNode;
};

interface ScreenProps {
  navigation: any;
  route?: any;
}

interface ListProps {
  color: string;
  items: string[];
  bracket: string;
  title: string;
}

interface Domain {
  id: number;
  title: string | null;
  icon: string | null;
}

interface ProjectProps {
  title: string;
  image: string;
  domains: Domain[];
  onPress: () => void;
}

interface FullScreenSlideshowProps {
  visible: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

interface SocialIconProps {
  color: string;
  onPress: () => void;
  iconType: "linkedin" | "github" | "google";
}

interface TechProps {
  title: string;
  theme: Theme;
}

interface SectionHeadingProps {
  bracket: string;
  title: string;
}

interface ThemeTextProps {
  style: TextStyle;
  text: string;
  color?: string;
  numberOfLines?: number;
}

export {
  Database,
  Props,
  ScreenProps,
  ListProps,
  ProjectProps,
  FullScreenSlideshowProps,
  SocialIconProps,
  TechProps,
  SectionHeadingProps,
  ThemeTextProps,
};
