import { supabase } from "@/util";
import { getProjects, getProject, getProfile } from "./index";

jest.mock("@/util", () => ({
  supabase: {
    from: jest.fn(),
  },
}));

function mockQueryBuilder(result: { data: unknown; error: unknown }) {
  const builder: any = {};
  builder.select = jest.fn(() => builder);
  builder.order = jest.fn(() => builder);
  builder.eq = jest.fn(() => builder);
  builder.single = jest.fn(() => builder);
  // oxlint-disable-next-line unicorn/no-thenable -- mimics Supabase's real thenable query builder
  builder.then = (resolve: any, reject?: any) => Promise.resolve(result).then(resolve, reject);
  return builder;
}

const projectRow = {
  id: 1,
  title: "Nectar",
  banner_url: "https://example.com/banner.png",
  images: ["a.png", "b.png"],
  long_description: "A dating app",
  tools_technologies: ["React Native"],
  non_technical_contributions: ["Onboarding"],
  techical_contributions: ["Architecture"],
  aproach: null,
  created_at: "2026-01-01",
  github: null,
  personal: false,
  short_description: null,
  project_domains: [{ domains: { id: 1, title: "dating", icon: "heart" } }],
};

const sparseProjectRow = {
  id: 2,
  title: null,
  banner_url: null,
  images: null,
  long_description: null,
  tools_technologies: null,
  non_technical_contributions: null,
  techical_contributions: null,
  aproach: null,
  created_at: "2026-01-01",
  github: null,
  personal: false,
  short_description: null,
  project_domains: [],
};

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("getProjects", () => {
  it("flattens project_domains into domains and maps nullable columns to fallbacks", async () => {
    (supabase.from as jest.Mock).mockReturnValue(
      mockQueryBuilder({ data: [projectRow, sparseProjectRow], error: null }),
    );

    const result = await getProjects();

    expect(result).toEqual([
      {
        id: 1,
        title: "Nectar",
        banner_url: "https://example.com/banner.png",
        images: ["a.png", "b.png"],
        long_description: "A dating app",
        tools_technologies: ["React Native"],
        non_technical_contributions: ["Onboarding"],
        techical_contributions: ["Architecture"],
        domains: [{ id: 1, title: "dating", icon: "heart" }],
      },
      {
        id: 2,
        title: "",
        banner_url: "",
        images: [],
        long_description: "",
        tools_technologies: [],
        non_technical_contributions: [],
        techical_contributions: [],
        domains: [],
      },
    ]);
  });

  it("returns an empty list when there is no data and no error", async () => {
    (supabase.from as jest.Mock).mockReturnValue(mockQueryBuilder({ data: null, error: null }));

    await expect(getProjects()).resolves.toEqual([]);
  });

  it("logs and throws a friendly message when the query errors", async () => {
    (supabase.from as jest.Mock).mockReturnValue(
      mockQueryBuilder({ data: null, error: { message: "boom" } }),
    );

    await expect(getProjects()).rejects.toThrow(
      "There was an issue with fetching the projects, please try again later!",
    );
    expect(console.error).toHaveBeenCalled();
  });
});

describe("getProject", () => {
  it("flattens domains and maps nullable columns for a single project", async () => {
    (supabase.from as jest.Mock).mockReturnValue(
      mockQueryBuilder({ data: projectRow, error: null }),
    );

    const result = await getProject(1);

    expect(result).toEqual({
      id: 1,
      title: "Nectar",
      banner_url: "https://example.com/banner.png",
      images: ["a.png", "b.png"],
      long_description: "A dating app",
      tools_technologies: ["React Native"],
      non_technical_contributions: ["Onboarding"],
      techical_contributions: ["Architecture"],
      domains: [{ id: 1, title: "dating", icon: "heart" }],
    });
  });

  it("logs and throws a friendly message when the query errors", async () => {
    (supabase.from as jest.Mock).mockReturnValue(
      mockQueryBuilder({ data: null, error: { message: "boom" } }),
    );

    await expect(getProject(1)).rejects.toThrow(
      "There was an issue with fetching this project, please try again later!",
    );
    expect(console.error).toHaveBeenCalled();
  });

  it("throws a friendly message when there is no data and no error", async () => {
    (supabase.from as jest.Mock).mockReturnValue(mockQueryBuilder({ data: null, error: null }));

    await expect(getProject(1)).rejects.toThrow(
      "There was an issue with fetching this project, please try again later!",
    );
  });
});

describe("getProfile", () => {
  const profileRow = {
    id: 1,
    name: "Arber",
    about_me: "Hi",
    intro: "Hello",
    email: "a@example.com",
    github: "https://github.com/arberhh",
    linkedin: "https://linkedin.com/in/arberhh",
    profile_picture: "https://example.com/pic.png",
    main_techs: ["React Native"],
    created_at: "2026-01-01",
  };

  it("returns the profile row as-is", async () => {
    (supabase.from as jest.Mock).mockReturnValue(
      mockQueryBuilder({ data: profileRow, error: null }),
    );

    await expect(getProfile()).resolves.toEqual(profileRow);
  });

  it("logs and throws a friendly message when the query errors", async () => {
    (supabase.from as jest.Mock).mockReturnValue(
      mockQueryBuilder({ data: null, error: { message: "boom" } }),
    );

    await expect(getProfile()).rejects.toThrow(
      "There was an issue with fetching the developer profile, please try again later!",
    );
    expect(console.error).toHaveBeenCalled();
  });

  it("throws a friendly message when there is no data and no error", async () => {
    (supabase.from as jest.Mock).mockReturnValue(mockQueryBuilder({ data: null, error: null }));

    await expect(getProfile()).rejects.toThrow(
      "There was an issue with fetching the developer profile, please try again later!",
    );
  });
});
