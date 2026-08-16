// themes.ts
export interface Theme {
  theme: "light" | "dark";
  screenBackground: string;
  color: string; // accent-dim: icons, back chevron, section headings
  text: string; // text primary: H1-equivalent titles
  textSecondary: string; // body / bio / description copy
  accent: string; // accent lime: chips, tags, active dot
  cardBackground: string; // card/row surface
  line: string; // row separator
  chipBorder: string; // pill/chip border
  dotInactive: string; // inactive carousel dot
}

export const lightTheme: Theme = {
  theme: "light",
  screenBackground: "#F7F9F6",
  color: "#3F8C1F",
  text: "#12160F",
  textSecondary: "#3A4038",
  accent: "#3F8C1F",
  cardBackground: "#FFFFFF",
  line: "rgba(63,140,31,0.18)",
  chipBorder: "rgba(63,140,31,0.4)",
  dotInactive: "rgba(63,140,31,0.25)",
};

export const darkTheme: Theme = {
  theme: "dark",
  screenBackground: "#0B0D0C",
  color: "#7FE07F",
  text: "#F2FFEF",
  textSecondary: "#DCEFD8",
  accent: "#B6FF6B",
  cardBackground: "#151815",
  line: "rgba(182,255,107,0.14)",
  chipBorder: "rgba(182,255,107,0.35)",
  dotInactive: "rgba(182,255,107,0.25)",
};
