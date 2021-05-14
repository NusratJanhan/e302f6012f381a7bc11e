import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../UI/Card/Card";
import Weather from "./Weather";
import classes from "../UI/Error.module.css";
import { Link } from "react-router-dom";

let id = 0;
const WeatherInfo = (props) => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [error, setError] = useState(null);

  const params = useParams();
  const weatherHandler = async () => {
    try {
      const acess_key = "5c664c0ad86393d1f3954aa7ad91bedf";
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${acess_key}&query=${params.country}`,
        {
          method: "GET",
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Data not available for ");
      }
      const data = await response.json();
      console.log(data.current);
      let info = [];
      info.push(data.current);
      let weatherI = [];

      weatherI = info.map((i) => {
        return {
          id: "w" + id,
          humidity: i.humidity,
          temperature: i["temperature"],
          description: i["weather_descriptions"],
          icon: i["weather_icons"],
        };
      });
      console.log(weatherI);
      setWeatherInfo(weatherI);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    weatherHandler();
    console.log("running");
  }, []);

  return (
    <Card>
      {!error ? (
        weatherInfo.map((weather) => (
          <Weather
            key={weather.id}
            country={params.country}
            humidity={weather.humidity}
            temperature={weather.temperature}
            description={weather.description}
            icon={weather.icon}
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

export default WeatherInfo;
