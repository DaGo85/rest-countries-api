import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryGrid from "../components/country-grid/CountryGrid";
import "../index.css";
import Magni from "../assets/magnifying-glass-solid.svg";

function Home() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState("none");
  const [region, setRegion] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  console.log("search" + search);
  useEffect(() => {
    setFilteredData(data.filter((country) => country.region === region));
  }, [region]);

  function handleDisplay() {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
      setFilteredData(data);
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flags,tld,currencies,languages,borders"
      )
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
        console.log("test1" + JSON.stringify(response.data));
      });
  }, []);

  useEffect(() => {
    const filterCountry = data.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filterCountry);
  }, [search]);

  return (
    <>
      <label>
        <img style={{ maxWidth: "40px" }} src={Magni} alt="magnifier" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="name"
          placeholder="Search for a country..."
        />
      </label>
      <button onClick={() => handleDisplay()}>Filter by Region</button>
      <div style={{ display: display }}>
        {options.map((option) => {
          return (
            <div
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
      {data && <CountryGrid data={filteredData} />}
    </>
  );
}

export default Home;
