import React from "react";
import CountryCard from "./CountryCard";
import "../../index.css";

// Grid for countrycards

function CountryGrid({ data }) {
  return (
    <div className="country-grid">
      {data.map((country) => {
        return <CountryCard country={country} key={country.name} />;
      })}
    </div>
  );
}

export default CountryGrid;
