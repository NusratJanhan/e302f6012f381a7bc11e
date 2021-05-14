import React from "react";
import { useHistory } from "react-router";

import classes from "./Weather.module.css";
const Weather = (props) => {
  let history = useHistory();
  const clickHandler = () => {
    console.log(props.country);
    history.push(`/`);
  };

  return (
    <div className={classes.country}>
      <h1>{props.country}</h1>
      <div className={classes.sections}>
        <span className={classes.title}>Humidity:</span>
        <span>{props.humidity}</span>
      </div>
      <div className={classes.sections}>
        <span className={classes.title}>Temperature:</span>{" "}
        <span>{props.temperature}</span>
      </div>
      <div className={classes.sections}>
        <span className={classes.title}>Description:</span>{" "}
        <span>{props.description}</span>
      </div>
      <div className={classes.flag}>
        <span className={classes.title}>Icon:</span>{" "}
        <img src={props.icon} alt={props.country} />
      </div>
      <div className={classes.button}>
        <button onClick={clickHandler}>Home</button>
      </div>
    </div>
  );
};

export default Weather;
