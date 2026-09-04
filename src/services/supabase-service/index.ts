import { supabase } from "@/util";
import { Database, Domain, Profile, Project } from "@/types";

const DOMAINS_SELECT = "*, project_domains(domains(id, title, icon))";

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];

function withFlattenedDomains<
  T extends { project_domains: { domains: Domain }[] }
>(project: T) {
  const { project_domains, ...rest } = project;
  return { ...rest, domains: project_domains.map((pd) => pd.domains) };
}

function toProject(row: ProjectRow & { domains: Domain[] }): Project {
  return {
    id: row.id,
    title: row.title ?? "",
    banner_url: row.banner_url ?? "",
    images: row.images ?? [],
    long_description: row.long_description ?? "",
    tools_technologies: row.tools_technologies ?? [],
    non_technical_contributions: row.non_technical_contributions ?? [],
    techical_contributions: row.techical_contributions ?? [],
    domains: row.domains,
  };
}

async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select(DOMAINS_SELECT)
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching projects:", error);
      throw new Error(
        "There was an issue with fetching the projects, please try again later!"
      );
    }
    return (data ?? []).map(withFlattenedDomains).map(toProject);
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    throw new Error(
      error.message ||
        "There was an issue with fetching the projects, please try again later!"
    );
  }
}

async function getProject(id: number): Promise<Project> {
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
    }
    return toProject(withFlattenedDomains(data));
  } catch (error: any) {
    // Handle error
    console.error("Error fetching project:", error);
    throw new Error(
      "There was an issue with fetching this project, please try again later!"
    );
  }
}

async function getProfile(): Promise<Profile> {
  try {
    const { data, error } = await supabase
      .from("profile")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetching developer profile:", error);
      throw new Error(
        "There was an issue with fetching the developer profile, please try again later!"
      );
    }
    if (!data) {
      throw new Error(
        "There was an issue with fetching the developer profile, please try again later!"
      );
    }
    return data;
  } catch (error) {
    console.error("Error fetching developer profile:", error);
    throw new Error(
      "There was an issue with fetching the developer profile, please try again later!"
    );
  }
}

export { getProjects, getProject, getProfile };
