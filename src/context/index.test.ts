import { lightTheme, darkTheme } from "@/themes";
import { themeReducer, darkState } from "./index";

describe("themeReducer", () => {
  it("flips from dark to light on TOGGLE_THEME", () => {
    const state = { theme: darkTheme, toggleTheme: () => {} };

    const next = themeReducer(state, { type: "TOGGLE_THEME" });

    expect(next.theme).toBe(lightTheme);
  });

  it("flips from light to dark on TOGGLE_THEME", () => {
    const state = { theme: lightTheme, toggleTheme: () => {} };

    const next = themeReducer(state, { type: "TOGGLE_THEME" });

    expect(next.theme).toBe(darkTheme);
  });

  it("preserves the rest of the state on TOGGLE_THEME", () => {
    const toggleTheme = () => {};
    const state = { theme: darkTheme, toggleTheme };

    const next = themeReducer(state, { type: "TOGGLE_THEME" });

    expect(next.toggleTheme).toBe(toggleTheme);
  });

  it("starts from dark theme by default", () => {
    expect(darkState.theme).toBe(darkTheme);
  });

  it("is a no-op for an unknown action", () => {
    const state = { theme: lightTheme, toggleTheme: () => {} };

    // @ts-expect-error - deliberately passing an action outside the known union
    const next = themeReducer(state, { type: "UNKNOWN" });

    expect(next).toBe(state);
  });
});
