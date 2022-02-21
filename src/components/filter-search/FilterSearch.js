import React from "react";
import Magni from "../../assets/magnifying-glass-solid.svg";

function FilterSearch() {
  return (
    <>
      <label>
        <img style={{ maxWidth: "40px" }} src={Magni} alt="magnifier" />
        <input type="text" name="name" placeholder="Search for a country..." />
      </label>
    </>
  );
}

export default FilterSearch;
