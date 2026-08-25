import { useEffect, useState } from "react";
import { getProject } from "@/services";

function useProject(id: number) {
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchProject() {
      try {
        const project = await getProject(id);
        setProject(project);
      } catch (error: any) {
        console.error("Error fetching project:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);

  return { project, loading, error };
}

export default useProject;
