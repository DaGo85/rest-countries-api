import React from "react"
import { Link } from "react-router-dom"
import "../../index.css"

function CountryCard({ country }) {
  return (
    <>
      <Link className="remove-deco" to={`/${country.name}`}>
        <div className="country-card">
          <img src={country.flags.png} alt="country-flag" />
          <h2>{country.name}</h2>
          <h4>
            <b>Population:</b>{" "}
            {country.population
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
          </h4>
          <h4>
            <b>Region:</b> {country.region}
          </h4>
          <h4>
            <b>Capital:</b> {country.capital}
          </h4>
        </div>
      </Link>
    </>
  )
}

export default CountryCard
