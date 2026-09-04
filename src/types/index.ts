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

type Domain = Pick<
  Database["public"]["Tables"]["domains"]["Row"],
  "id" | "title" | "icon"
>;

interface ProjectProps {
  title: string;
  image: string;
  domains: Domain[];
  onPress: () => void;
}

interface Project {
  id: number;
  title: string;
  banner_url: string;
  images: string[];
  long_description: string;
  tools_technologies: string[];
  non_technical_contributions: string[];
  techical_contributions: string[];
  domains: Domain[];
}

type Profile = Database["public"]["Tables"]["profile"]["Row"];

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
  Domain,
  Project,
  Profile,
  FullScreenSlideshowProps,
  SocialIconProps,
  TechProps,
  SectionHeadingProps,
  ThemeTextProps,
};
