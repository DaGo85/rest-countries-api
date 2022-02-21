import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryGrid from "../components/country-grid/CountryGrid";
import FilterSearch from "../components/filter-search/FilterSearch";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <FilterSearch />
      {data && <CountryGrid data={data} />}
    </>
  );
}

export default Home;
