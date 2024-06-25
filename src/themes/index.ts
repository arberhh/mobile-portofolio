// themes.ts
export interface Theme {
  theme: "light" | "dark";
  screenBackground: string;
  color: string;
  text: string;
  cardBackground: string;
  line: string;
  // Add more theme properties as needed
}

export const lightTheme: Theme = {
  theme: "light",
  screenBackground: "#FAFAFA", // Increased contrast
  color: "#333333",
  text: "#282828",
  cardBackground: "#F9F9F9", // Slightly softened white
  line: "#ECECEC",
  // Add more styles for light theme
};

export const darkTheme: Theme = {
  theme: "dark",
  screenBackground: "#070707", // Increased contrast
  color: "#F9F9F9",
  text: "#F9F9F9",
  cardBackground: "#090909", // Slightly softened black
  line: "#333333",
  // Add more styles for dark theme
};
