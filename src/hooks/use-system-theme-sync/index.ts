import { useEffect } from "react";
import { Appearance } from "react-native";
import { useTheme } from "@/context";

function useSystemThemeSync() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme !== theme.theme) {
        toggleTheme();
      }
    });
    return () => subscription.remove();
  }, [theme.theme, toggleTheme]);
}

export default useSystemThemeSync;
