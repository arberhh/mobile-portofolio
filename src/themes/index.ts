// themes.ts
export interface Theme {
  screenBackground: string;
  color: string,
  text: string;
  cardBackground: string;
  line: string;
  // Add more theme properties as needed
}

export const lightTheme: Theme = {
  screenBackground: '#F7F7F8',
  color: '#000000',
  text: '#000000',
  cardBackground: '#fff',
  line: '#CCCCCC'
  // Add more styles for light theme
};

export const darkTheme: Theme = {
  screenBackground: '#1C1C1C',
  color: '#ffffff',
  text: '#ffffff',
  cardBackground: '#161311',
  line: '#666666'
  // Add more styles for dark theme
};
