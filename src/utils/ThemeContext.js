import { createContext } from "react";

// createContext for dark-mode

export const themes = {
  dark: "dark-content",
  light: "",
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});
