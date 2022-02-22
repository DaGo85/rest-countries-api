import React, { useState } from "react";
import MoonDark from "../../assets/moon-solid.svg";
import MoonLight from "../../assets/moon-regular.svg";
import { ThemeContext, themes } from "../../utils/ThemeContext";

function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div id="header">
        <h1>Where in the world?</h1>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            >
              <img src={darkMode ? MoonDark : MoonLight} alt="Moon" />
              Dark Mode
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </>
  );
}

export default NavBar;
