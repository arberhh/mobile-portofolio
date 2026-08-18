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

export default ProjectProps;
