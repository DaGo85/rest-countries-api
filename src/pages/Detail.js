import axios from "axios";
import React, { useEffect, useState } from "react";
import Arrow from "../assets/arrow-left-solid.svg";
function Detail() {
  const country = {
    name: {
      common: "Germany",
      official: "Federal Republic of Germany",
      nativeName: {
        deu: { official: "Bundesrepublik Deutschland", common: "Deutschland" },
      },
    },
    tld: [".de"],
    cca2: "DE",
    ccn3: "276",
    cca3: "DEU",
    cioc: "GER",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    idd: { root: "+4", suffixes: ["9"] },
    capital: ["Berlin"],
    altSpellings: [
      "DE",
      "Federal Republic of Germany",
      "Bundesrepublik Deutschland",
    ],
    region: "Europe",
    subregion: "Western Europe",
    languages: { deu: "German" },
    translations: {
      ara: { official: "جمهورية ألمانيا الاتحادية", common: "ألمانيا" },
      ces: { official: "Spolková republika Německo", common: "Německo" },
      cym: { official: "Federal Republic of Germany", common: "Germany" },
      deu: { official: "Bundesrepublik Deutschland", common: "Deutschland" },
      est: { official: "Saksamaa Liitvabariik", common: "Saksamaa" },
      fin: { official: "Saksan liittotasavalta", common: "Saksa" },
      fra: { official: "République fédérale d'Allemagne", common: "Allemagne" },
      hrv: { official: "Njemačka Federativna Republika", common: "Njemačka" },
      hun: { official: "Német Szövetségi Köztársaság", common: "Németország" },
      ita: { official: "Repubblica federale di Germania", common: "Germania" },
      jpn: { official: "ドイツ連邦共和国", common: "ドイツ" },
      kor: { official: "독일 연방 공화국", common: "독일" },
      nld: { official: "Bondsrepubliek Duitsland", common: "Duitsland" },
      per: { official: "جمهوری فدرال آلمان", common: "آلمان" },
      pol: { official: "Republika Federalna Niemiec", common: "Niemcy" },
      por: { official: "República Federal da Alemanha", common: "Alemanha" },
      rus: { official: "Федеративная Республика Германия", common: "Германия" },
      slk: { official: "Nemecká spolková republika", common: "Nemecko" },
      spa: { official: "República Federal de Alemania", common: "Alemania" },
      swe: { official: "Förbundsrepubliken Tyskland", common: "Tyskland" },
      urd: { official: "وفاقی جمہوریہ جرمنی", common: "جرمنی" },
      zho: { official: "德意志联邦共和国", common: "德国" },
    },
    latlng: [51, 9],
    landlocked: false,
    borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
    area: 357114,
    demonyms: {
      eng: { f: "German", m: "German" },
      fra: { f: "Allemande", m: "Allemand" },
    },
    flag: "🇩🇪",
    maps: {
      googleMaps: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
      openStreetMaps: "https://www.openstreetmap.org/relation/51477",
    },
    population: 83240525,
    gini: { 2016: 31.9 },
    fifa: "GER",
    car: { signs: ["DY"], side: "right" },
    timezones: ["UTC+01:00"],
    continents: ["Europe"],
    flags: {
      png: "https://flagcdn.com/w320/de.png",
      svg: "https://flagcdn.com/de.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/de.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/de.svg",
    },
    startOfWeek: "monday",
    capitalInfo: { latlng: [52.52, 13.4] },
    postalCode: { format: "#####", regex: "^(\\d{5})$" },
  };

  const [borderData, setBorderData] = useState([]);
  const borderArray = country.borders.join();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha?codes=${borderArray}`)
      .then((response) => {
        setBorderData(response.data);
        console.log("first" + response.data);
      });
  }, []);

  return (
    <>
      <button>
        <img src={Arrow} alt="Arrow" />
        Back
      </button>
      <img src={country.flags.svg} alt="country-flag" />
      <div>
        <h2>{country.name.common}</h2>
        <h5>Native Name: {country.name.nativeName.deu.official}</h5>
        <h5>Population: {country.population}</h5>
        <h5>Region: {country.region}</h5>
        <h5>Sub Region: {country.subregion}</h5>
        <h5>Capital: {country.capital}</h5>
        <h5>Top Level Domain: {country.tld}</h5>
        <h5>Currencies: {country.currencies}</h5>
        <h5>Languages: {country.languages}</h5>
        <h5>
          Border Countries:{" "}
          {borderData.map((borderCountry) => {
            return <div>{borderCountry.name.common}</div>;
          })}
        </h5>
      </div>
    </>
  );
}

export default Detail;
