import React from "react";
import MoonDark from "../../assets/moon-solid.svg";
import MoonLight from "../../assets/moon-regular.svg";

function NavBar() {
  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <button>
          <img src={MoonDark} alt="Moon" />
          Dark Mode
        </button>
      </header>
    </>
  );
}

export default NavBar;
