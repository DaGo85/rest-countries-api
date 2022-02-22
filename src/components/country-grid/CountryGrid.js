import React from "react";
import CountryCard from "./CountryCard";

function CountryGrid({ data }) {
  return (
    <>
      {data.map((country) => {
        if (country.name.common === "Germany") {
        }
        return <CountryCard country={country} key={country.name} />;
      })}
    </>
  );
}

export default CountryGrid;
