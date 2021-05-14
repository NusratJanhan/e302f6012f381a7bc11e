import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";
import Country from "./Country";
import classes from "../UI/Error.module.css";
let id = 0;
const CountryInfo = (props) => {
  const params = useParams();
  console.log(params);
  const [error, setError] = useState(null);

  const [countryInfo, setCountryInfo] = useState([]);

  async function addCountryHandler(country) {
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${params.country}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Data not available for ");
      }
      const data = await response.json();
      console.log(data);
      const countryI = [];
      for (const key in data) {
        id++;
        countryI.push({
          id: id,
          country: params.country,
          capital: data[key].capital,
          latlng: data[key].latlng,
          population: data[key].population,
          flag: data[key].flag,
        });
      }

      setCountryInfo(countryI);
      console.log(countryI);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    addCountryHandler();
  }, []);

  return (
    <Card>
      {!error ? (
        countryInfo.map((d) => (
          <Country
            key={d.id}
            country={d.country}
            capital={d.capital}
            population={d.population}
            latlng={d.latlng}
            flag={d.flag}
          />
        ))
      ) : (
        <div className={classes.error}>
          <p>
            {error} <b>{params.country}</b>
          </p>
          <Link to="/">
            <button className={classes.button}>Home</button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default CountryInfo;
