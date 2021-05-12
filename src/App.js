import "./App.css";
import Card from "./components/UI/Card/Card";
import CountryForm from "./components/Country/CountryForm";
import CountryInfo from "./components/Country/CountryInfo";

import { useState } from "react";
import { Switch, Route } from "react-router-dom";
function App() {
  const [countryInfo, setCountryInfo] = useState([]);
  let countryI = [];
  async function addCountryHandler(country) {
    console.log(country);
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);

    countryI = data.map((d) => {
      return {
        country: country,
        capital: d.capital,
        population: d.population,
        latlng: d.latlng,
        flag: d.flag,
      };
    });
    setCountryInfo(countryI);
    console.log(countryI);
  }
  return (
    <div className="App">
      <Switch>
        <Route path={`/country/:country`}>
          <CountryInfo data={countryInfo} />
        </Route>
        <Route exact path="">
          <CountryForm onSubmitCountry={addCountryHandler} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
