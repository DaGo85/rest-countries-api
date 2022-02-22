import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Arrow from "../assets/arrow-left-solid.svg";
function Detail() {
  const location = useParams();
  const path = location.nameId;

  const [borderData, setBorderData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v2/name/${path}?fields=name,nativeName,population,region,subregion,capital,flags,topLevelDomain,currencies,languages,borders`
      )
      .then((response) => {
        setData(response.data);
        console.log("hallowelt" + JSON.stringify(response.data));
        const borderArray = response.data[0].borders;
        axios
          .get(`https://restcountries.com/v3.1/alpha?codes=${borderArray}`)
          .then((response) => {
            setBorderData(response.data);
            console.log("first" + JSON.stringify(response.data[0].borders));
          });
        console.log("test1" + JSON.stringify(response.data));
      });
  }, [path]);

  useEffect(() => {}, [data[0]]);

  return (
    <>
      <button>
        <img src={Arrow} alt="Arrow" />
        Back
      </button>
      {data[0] && (
        <>
          <img src={data[0].flags.svg} alt="country-flag" />
          <div>
            <h2>{data[0].name}</h2>
            <h5>Native Name: {data[0].nativeName}</h5>
            <h5>Population: {data[0].population}</h5>
            <h5>Region: {data[0].region}</h5>
            <h5>Sub Region: {data[0].subregion}</h5>
            <h5>Capital: {data[0].capital}</h5>
            <h5>Top Level Domain: {data[0].topLevelDomain}</h5>
            <h5>Currencies: {data[0].currencies[0].name}</h5>
            <h5>Languages: {data[0].languages[0].name}</h5>
            <div>
              Border Countries:{" "}
              {borderData &&
                borderData.map((borderCountry) => {
                  return (
                    <div key={borderCountry.name.common}>
                      {borderCountry.name.common}
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
