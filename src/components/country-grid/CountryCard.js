import React from "react";

function CountryCard({ country }) {
  return (
    <>
      <img src={country.flags.svg} alt="country-flag" />
      <h2>{country.name.common}</h2>
      <h4>Population: {country.population}</h4>
      <h4>Region: {country.region}</h4>
      <h4>Capital: {country.capital}</h4>
    </>
  );
}

export default CountryCard;
