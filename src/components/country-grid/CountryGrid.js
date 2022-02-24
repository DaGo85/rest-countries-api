import React from "react"
import CountryCard from "./CountryCard"
import "../../index.css"

function CountryGrid({ data }) {
  return (
    <div className="country-grid">
      {data.map((country) => {
        if (country.name.common === "Germany") {
        }
        return <CountryCard country={country} key={country.name} />
      })}
    </div>
  )
}

export default CountryGrid
