interface ProjectProps {
  title: string;
  image: string;
  domains: string[];
  domainIcons: Record<string, string>;
  description: string;
  onPress: () => void;
}

export default ProjectProps;