interface Domain {
  id: number;
  title: string | null;
  icon: string | null;
}

interface ProjectProps {
  title: string;
  image: string;
  domains: Domain[];
  description: string;
  onPress: () => void;
}

export default ProjectProps;
export { Domain };
