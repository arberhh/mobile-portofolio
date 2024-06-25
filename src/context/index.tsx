import React, { useReducer, useContext, createContext } from "react";
import { Theme, lightTheme, darkTheme } from "@/themes";
import { Props } from "@/types";
import { useColorScheme } from "react-native";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

type Action = { type: "TOGGLE_THEME" };

const ThemeContext = createContext<ThemeState | undefined>(undefined);

const lightState: ThemeState = {
  theme: lightTheme,
  toggleTheme: () => { },
};

const darkState: ThemeState = {
  theme: darkTheme,
  toggleTheme: () => { },
};


const themeReducer = (state: ThemeState, action: Action): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
    default:
      return state;
  }
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};


const ThemeProvider = ({ children }: Props) => {
  const colorScheme = useColorScheme();
  const [state, dispatch] = useReducer(themeReducer, colorScheme === "dark" ? darkState : lightState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



export { ThemeProvider, useTheme }