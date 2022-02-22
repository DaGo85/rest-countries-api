import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryGrid from "../components/country-grid/CountryGrid";
import FilterSearch from "../components/filter-search/FilterSearch";

function Home() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState("none");
  const [region, setRegion] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    setFilteredData(data.filter((country) => country.region === region));
  }, [region]);

  function handleDisplay() {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flags,tld,currencies,languages,borders"
      )
      .then((response) => {
        setData(response.data);
        console.log("test1" + JSON.stringify(response.data));
      });
  }, []);

  return (
    <>
      <FilterSearch />
      <button onClick={() => handleDisplay()}>Filter by Region</button>
      <div style={{ display: display }}>
        {options.map((option) => {
          return <div onClick={() => setRegion(option)}>{option}</div>;
        })}
      </div>
      {data && <CountryGrid data={filteredData} />}
    </>
  );
}

export default Home;
