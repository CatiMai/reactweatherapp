import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

export default function Default() {
  const [weather, setWeather] = useState({});
  function showInfo(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  let key = `3aacdf70afc33650631ca99d10ae4afe`;
  let city = `Honolulu`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(showInfo);
  return (
    <div>
      <h3 className="searchedCity">{city}</h3>
      <ul className="row col-6 displayInfo">
        <li>Temperature: {Math.round(weather.temperature)}°C</li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind}km/h</li>
        <li>
          <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
    </div>
  );
}
