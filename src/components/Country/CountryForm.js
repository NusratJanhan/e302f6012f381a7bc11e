import React, { useRef } from "react";
import classes from "./CountryForm.module.css";
import Card from "../UI/Card/Card";
import { useHistory } from "react-router-dom";
const CountryForm = (props) => {
  const countryRef = useRef("");
  let history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    const country = countryRef.current.value;
    // props.onSubmitCountry(country);
    history.push(`/country/${country}`);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <input type="text" placeholder="Enter Country" ref={countryRef} />
        </div>

        <button type="submit" className={classes.button}>
          Submit
        </button>
      </form>
    </Card>
  );
};

export default CountryForm;
