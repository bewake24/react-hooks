import React from "react";
import { useState } from "react";
import Header from "../Header";

const cities = [
  { name: "india", code: "IN", cities: ["Delhi", "Mumbai", "Chennai"] },
  { name: "USA", code: "US", cities: ["New York", "Los Angeles", "Chicago"] },
  { name: "UK", code: "UK", cities: ["London", "Manchester", "Birmingham"] },
  { name: "Canada", code: "CA", cities: ["Toronto", "Vancouver", "Montreal"] },
];

const CityPicker = () => {
  const [shownCity, setShownCity] = useState([]);

  const handleCities = (e) => {
    console.log(e.target.value);
    const country = cities.find((city) => city.name === e.target.value);

    setShownCity(country.cities);
  };
  return (
    <>
      <Header title="City Picker" />

      <div className="text-center">
        <label for="city">Select Country</label>

        <select onChange={handleCities}>
          <option value=" ">{"...select"} </option>
          {cities.map((city) => {
            return (
              <>
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              </>
            );
          })}
        </select>

        <label for="city">Select City</label>

        <select>
          <option value=" ">{"...select"} </option>
          {shownCity.map((city, index) => {
            return (
              <>
                <option key={index} value={city}>
                  {city}
                </option>
              </>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default CityPicker;
