import React, { useState } from "react";
import MoonDark from "../../assets/moon-solid.svg";
import MoonLight from "../../assets/moon-regular.svg";
import { ThemeContext, themes } from "../../utils/ThemeContext";
import { Link } from "react-router-dom";

// Navigation bar of the SPA
// Displayed on every page and does not rerender through the use of react router

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <header id="header">
        <Link className="remove-deco" to={"/"}>
          <h1>Where in the world?</h1>
        </Link>
        {/* Context consumer for switching dark mode on click */}
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <div
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            >
              <img src={darkMode ? MoonDark : MoonLight} alt="Moon" />
              <p>Dark Mode</p>
            </div>
          )}
        </ThemeContext.Consumer>
      </header>
    </>
  );
}

export default NavBar;
