import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import Default from "./Default";

export default function Form() {
  const [city, setCity] = useState("Honolulu");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  function showInfo(response) {
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setLoaded(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let key = `3aacdf70afc33650631ca99d10ae4afe`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(showInfo);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="row">
        {" "}
        <div className="col-8">
          <input
            className="textinput"
            type="search"
            placeholder="Type a city.."
            onChange={updateCity}
          />
        </div>
        <div className="col-4">
          <input className="searchbutton" type="submit" value="search" />
        </div>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div>
        <div>{form}</div>
        <div>
          <h3 className="searchedCity">{city}</h3>
          <ul className="row col-6 displayInfo">
            <li>Temperature: {Math.round(weather.temperature)}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {Math.round(weather.wind)}km/h</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>{form}</div>
        <div>
          <>
            <Default />
          </>
        </div>
      </div>
    );
  }
}
