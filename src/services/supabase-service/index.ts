import { supabase } from "@/util";

const DOMAINS_SELECT = "*, project_domains(domains(id, title, icon))";

const withFlattenedDomains = <
  T extends { project_domains: { domains: unknown }[] }
>(
  project: T
) => {
  const { project_domains, ...rest } = project;
  return { ...rest, domains: project_domains.map((pd) => pd.domains) };
};

const getProjects = async () => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(DOMAINS_SELECT);
    if (error) {
      console.error("Error fetching projects:", error);
      throw new Error(
        "There was an issue with fetching the projects, please try again later!"
      );
    }
    if (data) {
      return data.map(withFlattenedDomains);
    }
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    throw new Error(
      error.message ||
        "There was an issue with fetching the projects, please try again later!"
    );
  }
};

const getProject = async (id: number) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(DOMAINS_SELECT)
      .eq("id", id)
      .single();

    if (error) {
      // Handle error
      console.error("Error fetching project:", error);
      throw new Error(
        "There was an issue with fetching this project, please try again later!"
      );
    } else {
      return withFlattenedDomains(data);
    }
  } catch (error: any) {
    // Handle error
    console.error("Error fetching project:", error);
    throw new Error(
      "There was an issue with fetching this project, please try again later!"
    );
  }
};

const getProfile = async () => {
  try {
    let { data, error } = await supabase.from("profile").select("*").single();

    if (error) {
      console.error("Error fetching developer profile:", error);
      throw new Error(
        "There was an issue with fetching the developer profile, please try again later!"
      );
    }
    if (data) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching developer profile:", error);
    throw new Error(
      "There was an issue with fetching the developer profile, please try again later!"
    );
  }
};

export { getProjects, getProject, getProfile };
