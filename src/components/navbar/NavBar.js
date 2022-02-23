import React, { useState } from "react"
import MoonDark from "../../assets/moon-solid.svg"
import MoonLight from "../../assets/moon-regular.svg"
import { ThemeContext, themes } from "../../utils/ThemeContext"

function NavBar() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <header id="header">
        <h1>Where in the world?</h1>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <div
              onClick={() => {
                setDarkMode(!darkMode)
                changeTheme(darkMode ? themes.light : themes.dark)
              }}
            >
              <img src={darkMode ? MoonDark : MoonLight} alt="Moon" />
              <p>Dark Mode</p>
            </div>
          )}
        </ThemeContext.Consumer>
      </header>
    </>
  )
}

export default NavBar
