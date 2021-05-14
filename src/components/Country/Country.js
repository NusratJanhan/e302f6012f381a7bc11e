import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./Country.module.css";
// let id = 0;
const Country = (props) => {
  let history = useHistory();
  const clickHandler = () => {
    console.log(props.country);
    history.push(`/weather_info/${props.country}`);
  };

  return (
    <div className={classes.country}>
      <h1>{props.country}</h1>
      <div className={classes.sections}>
        <span className={classes.title}>Capital:</span>
        <span>{props.capital}</span>
      </div>
      <div className={classes.sections}>
        <span className={classes.title}>Population:</span>{" "}
        <span>{props.population}</span>
      </div>
      <div className={classes.sections}>
        <span className={classes.title}>Latitude:</span>{" "}
        <span>{props.latlng[0]}</span>
      </div>
      <div className={classes.sections}>
        <span className={classes.title}>Longitude:</span>{" "}
        <span>{props.latlng[1]}</span>
      </div>
      <div className={classes.flag}>
        <span className={classes.title}>Flag:</span>{" "}
        <img src={props.flag} alt={props.capital} />
      </div>
      <div className={classes.button}>
        <button onClick={clickHandler}>Weather Info</button>
      </div>
    </div>
  );
};

export default Country;
