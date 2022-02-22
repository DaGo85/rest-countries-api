import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    const headerElement = document.getElementById("header");
    switch (theme) {
      case themes.dark:
        document.body.classList.add("dark-content");
        headerElement.classList.add("dark-content-header");
        break;
      case themes.light:
      default:
        document.body.classList.remove("dark-content");
        headerElement.classList.remove("dark-content-header");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
