// themes.ts
export interface Theme {
  background: string;
  color: string,
  text: string;
  line: string;
  // Add more theme properties as needed
}

export const lightTheme: Theme = {
  background: '#ffffff',
  color: '#000000',
  text: '#000000',
  line: '#CCCCCC'
  // Add more styles for light theme
};

export const darkTheme: Theme = {
  background: '#100C08',
  color: '#ffffff',
  text: '#ffffff',
  line: '#666666'
  // Add more styles for dark theme
};
