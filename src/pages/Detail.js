import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Arrow from "../assets/arrow-left-solid.svg";

// Detail page for the SPA
// Contains Flag, details and bordercountries links

function Detail() {
  // Gets information about the address bar

  const location = useParams();
  const path = location.nameId;

  const [borderData, setBorderData] = useState([]);
  const [data, setData] = useState([]);
  const [languagesString, setLanguagesString] = useState("");

  // Function for creating and formating information from JSON

  const getLanguages = (data) => {
    let trimmedString = "";
    data[0].languages.map((language) => {
      trimmedString += `${language.name}, `;
    });
    setLanguagesString(trimmedString.slice(0, -2));
  };

  // After path changes, this fetches new data
  // Also new data for the border countries is fetched

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v2/name/${path}?fields=name,nativeName,population,region,subregion,capital,flags,topLevelDomain,currencies,languages,borders`
      )
      .then((response) => {
        setData(response.data);
        getLanguages(response.data);
        const borderArray = response.data[0].borders;
        axios
          .get(`https://restcountries.com/v3.1/alpha?codes=${borderArray}`)
          .then((response) => {
            setBorderData(response.data);
          });
      });
  }, [path]);

  return (
    <div className="detail">
      {/* Back to home button */}
      <Link className="remove-deco" to="/">
        <button className="back-button">
          <img src={Arrow} alt="Arrow" />
          Back
        </button>
      </Link>
      {/* After succesful fetching data, this renders the info panel */}
      {data[0] && (
        <div className="detail-body">
          <img src={data[0].flags.svg} alt="country-flag" />
          <div className="detail-body-text">
            <div className="detail-body-control">
              <div className="main-detail-text">
                <h2>{data[0].name}</h2>
                <h5>
                  <b>Native Name: </b> {data[0].nativeName}
                </h5>
                <h5>
                  <b>Population: </b>
                  {data[0].population
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                </h5>
                <h5>
                  <b>Region: </b>
                  {data[0].region}
                </h5>
                <h5>
                  <b>Sub Region: </b> {data[0].subregion}
                </h5>
                <h5>
                  <b>Capital: </b> {data[0].capital}
                </h5>
              </div>
              <div className="side-detail-text">
                <h5>
                  <b>Top Level Domain: </b> {data[0].topLevelDomain}
                </h5>
                <h5>
                  <b>Currencies: </b> {data[0].currencies[0].name}
                </h5>
                {/* After succesful fetching data, this renders the spoken languages */}
                <h5>
                  <b>Languages: </b> {languagesString && languagesString}
                </h5>
              </div>
            </div>
            <div className="border-countries">
              <h5>
                <b>Border Countries:</b>
              </h5>
              {/* After succesful fetching data, this renders the border countries */}
              <div className="border-button-bar">
                {borderData &&
                  borderData.map((borderCountry) => {
                    return (
                      <Link
                        className="remove-deco"
                        to={`/${borderCountry.name.common}`}
                      >
                        <button
                          className="border-button"
                          key={borderCountry.name.common}
                        >
                          {borderCountry.name.common}
                        </button>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
