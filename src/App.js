import "./App.css";
import CountryForm from "./components/Country/CountryForm";
import CountryInfo from "./components/Country/CountryInfo";

// import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import WeatherInfo from "./components/Weather/WeatherInfo";
// let id = 0;
function App() {
  // // let countryI = [];
  // async function addCountryHandler(country) {
  //   console.log(country);
  //   const response = await fetch(
  //     `https://restcountries.eu/rest/v2/name/${country}`,
  //     // `https://restcountries.eu/rest/v2/`,
  //     {
  //       method: "GET",
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   const countryI = [];
  //   for (const key in data) {
  //     id++;
  //     countryI.push({
  //       id: id,
  //       country: country,
  //       capital: data[key].capital,
  //       latlng: data[key].latlng,
  //       population: data[key].population,
  //       flag: data[key].flag,
  //     });
  //   }

  //   setCountryInfo(countryI);
  //   console.log(countryI);
  // }
  // return (
  //   <div className="App">
  //     <Switch>
  //       <Route path={`/country/:country`}>
  //         <CountryInfo data={countryInfo} />
  //       </Route>
  //       <Route path={`/weather_info/:country`}>
  //         <WeatherInfo data={countryInfo} />
  //       </Route>
  //       <Route exact path="">
  //         <CountryForm onSubmitCountry={addCountryHandler} />
  //       </Route>
  //     </Switch>
  //   </div>
  // );
  return (
    <div className="App">
      <Switch>
        <Route path={`/country/:country`}>
          <CountryInfo />
        </Route>
        <Route path={`/weather_info/:country`}>
          <WeatherInfo />
        </Route>
        <Route exact path="">
          <CountryForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
