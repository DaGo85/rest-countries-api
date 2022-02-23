import axios from "axios"
import React, { useEffect, useState } from "react"
import CountryGrid from "../components/country-grid/CountryGrid"
import "../index.css"
import Magni from "../assets/magnifying-glass-solid.svg"
import Angle from "../assets/angle-down-solid.svg"

function Home() {
  const [data, setData] = useState([])
  const [display, setDisplay] = useState("none")
  const [region, setRegion] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState("")

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  console.log("search" + search)
  useEffect(() => {
    setFilteredData(data.filter((country) => country.region === region))
  }, [region])

  function handleDisplay() {
    if (display === "none") {
      setDisplay("block")
    } else {
      setDisplay("none")
      setFilteredData(data)
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flags,tld,currencies,languages,borders"
      )
      .then((response) => {
        setData(response.data)
        setFilteredData(response.data)
        console.log("test1" + JSON.stringify(response.data))
      })
  }, [])

  useEffect(() => {
    const filterCountry = data.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredData(filterCountry)
  }, [search])

  return (
    <>
      <span>
        <label>
          <img src={Magni} alt="magnifier" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="name"
            placeholder="Search for a country..."
          />
        </label>
        <span className="drop-down">
          <button onClick={() => handleDisplay()}>
            <p>Filter by Region</p>
            <img src={Angle} alt="Angle" />
          </button>
          <div className="drop-down-content" style={{ display: display }}>
            {options.map((option) => {
              return (
                <div
                  onClick={() => {
                    setDisplay("none")
                    setRegion(option)
                  }}
                >
                  {option}
                </div>
              )
            })}
          </div>
        </span>
      </span>
      {data && <CountryGrid data={filteredData} />}
    </>
  )
}

export default Home
