import React, { useReducer, useContext, createContext } from 'react';
import { Theme, lightTheme, darkTheme } from '../themes';
import { Props } from '../types';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

type Action = { type: 'TOGGLE_THEME' };

const ThemeContext = createContext<ThemeState | undefined>(undefined);

const initialState: ThemeState = {
  theme: lightTheme,
  toggleTheme: () => { },
};


const themeReducer = (state: ThemeState, action: Action): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
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
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



export { ThemeProvider, useTheme }