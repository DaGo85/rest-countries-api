import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <>
      <Link to={`/${country.name}`}>
        <img src={country.flags.svg} alt="country-flag" />
        <h2>{country.name}</h2>
        <h4>Population: {country.population}</h4>
        <h4>Region: {country.region}</h4>
        <h4>Capital: {country.capital}</h4>
      </Link>
    </>
  );
}

export default CountryCard;
