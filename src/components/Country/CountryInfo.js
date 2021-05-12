import React from "react";
import Card from "../UI/Card/Card";
const CountryInfo = (props) => {
  const info = props.data;
  console.log(info);
  return (
    <Card>
      <span>Capital:</span> <span>{info.capital}</span>
      <span>Population:</span> <span>{info.population}</span>
      <span>Lanlng:</span> <span>{info.lanlng}</span>
      <span>Flag:</span> <img src={info.flag} />
    </Card>
  );
};

export default CountryInfo;
