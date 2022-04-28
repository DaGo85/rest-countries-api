import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryGrid from "../components/country-grid/CountryGrid";
import "../index.css";
import Magni from "../assets/magnifying-glass-solid.svg";
import Angle from "../assets/angle-down-solid.svg";

// Main and landing page for the SPA
// Contains searchfilter, categoryfilter and CountryGrid

function Home() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState("none");
  const [region, setRegion] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // After region changes, data will be filtered by region

  useEffect(() => {
    setFilteredData(data.filter((country) => country.region === region));
  }, [region]);

  // Handles the logic for dropdown menu

  function handleDisplay() {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
      setFilteredData(data);
    }
  }

  // Initial data fetch

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flags,tld,currencies,languages,borders,alpha3Code"
      )
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      });
  }, []);

  // After the input in search changes, list of countries gets filtered live

  useEffect(() => {
    const filterCountry = data.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filterCountry);
  }, [search]);

  return (
    <>
      <span>
        {/* SearchFilter input */}
        <label>
          <img src={Magni} alt="magnifier" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="name"
            placeholder="Search for a country..."
          />
        </label>
        {/* CategoryFilter drop down menu */}
        <span className="drop-down">
          <button onClick={() => handleDisplay()}>
            <p>Filter by Region</p>
            <img src={Angle} alt="Angle" />
          </button>
          <div className="drop-down-content" style={{ display: display }}>
            {options.map((option) => {
              return (
                <div
                  key={option}
                  className="mouse-hover"
                  onClick={() => {
                    setDisplay("none");
                    setRegion(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </span>
      </span>
      {/* CountryCardGrid */}
      {data && <CountryGrid data={filteredData} />}
    </>
  );
}

export default Home;
