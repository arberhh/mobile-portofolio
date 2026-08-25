import { useEffect, useState } from "react";
import { getProjects } from "@/services";

function useProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projects = (await getProjects()) || [];
        setProjects(projects);
      } catch (error: any) {
        console.error({ error });
        setError(error.message);
      }
    }

    fetchProjects();
  }, []);

  return { projects, error };
}

export default useProjects;
