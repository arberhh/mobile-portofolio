import { supabase } from "@/util";

const getProjects = async () => {
  try {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      console.error("Error fetching projects:", error);
      throw new Error(
        "There was an issue with fetching the projects, please try again later!"
      );
    }
    if (data) {
      return data;
    }
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    throw new Error(
      error.message ||
        "There was an issue with fetching the projects, please try again later!"
    );
  }
};

const getProject = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      // Handle error
      console.error("Error fetching project:", error);
      throw new Error(
        "There was an issue with fetching this project, please try again later!"
      );
    } else {
      return data;
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
