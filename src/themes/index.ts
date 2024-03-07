// themes.ts
export interface Theme {
  background: string;
  text: string;
  // Add more theme properties as needed
}

export const lightTheme: Theme = {
  background: '#ffffff',
  text: '#000000',
  // Add more styles for light theme
};

export const darkTheme: Theme = {
  background: '#000000',
  text: '#ffffff',
  // Add more styles for dark theme
};
