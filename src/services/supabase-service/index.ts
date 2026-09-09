import { Image } from "expo-image";
import { supabase } from "@/util";
import { Database, Domain, Profile, Project } from "@/types";

const DOMAINS_SELECT = "*, project_domains(domains(id, title, icon))";

function prefetchImages(urls: string[]) {
  const validUrls = urls.filter((url) => url !== "");
  if (validUrls.length > 0) {
    Image.prefetch(validUrls).catch(() => {});
  }
}

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"];

async function runQuery<T>(
  query: PromiseLike<{ data: T; error: unknown }>,
  fallbackMessage: string,
): Promise<T> {
  try {
    const { data, error } = await query;
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(fallbackMessage, error);
    throw new Error(fallbackMessage);
  }
}

function withFlattenedDomains<T extends { project_domains: { domains: Domain }[] }>(project: T) {
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
  const rows = await runQuery(
    supabase.from("projects").select(DOMAINS_SELECT).order("created_at", { ascending: false }),
    "There was an issue with fetching the projects, please try again later!",
  );
  const projects = (rows ?? []).map(withFlattenedDomains).map(toProject);
  prefetchImages(projects.map((project) => project.banner_url));
  return projects;
}

async function getProject(id: number): Promise<Project> {
  const fallbackMessage = "There was an issue with fetching this project, please try again later!";
  const row = await runQuery(
    supabase.from("projects").select(DOMAINS_SELECT).eq("id", id).single(),
    fallbackMessage,
  );
  if (!row) throw new Error(fallbackMessage);
  const project = toProject(withFlattenedDomains(row));
  prefetchImages([project.banner_url, ...project.images]);
  return project;
}

async function getProfile(): Promise<Profile> {
  const fallbackMessage =
    "There was an issue with fetching the developer profile, please try again later!";
  const profile = await runQuery(supabase.from("profile").select("*").single(), fallbackMessage);
  if (!profile) throw new Error(fallbackMessage);
  return profile;
}

export { getProjects, getProject, getProfile };
