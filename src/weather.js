import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherInfo from "./weatherinfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "cf3e506438214bee7911d63659fba7fa";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function search2(position) {
    const apiKey = "cf3e506438214bee7911d63659fba7fa";
    let latitude = position.coords.latitude;
    console.log(`Latitude: ${latitude}`);
    let longitude = position.coords.longitude;
    console.log(`Longitude: ${longitude}`);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
    axios.get(`${url}&appid=${apiKey}`).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleTypedValue(event) {
    setCity(event.target.value);
  }

  function handleClick(event) {
    navigator.geolocation.getCurrentPosition(search2);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleTypedValue}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>

            <div className="col-1">
              <input
                type="submit"
                className="btn"
                value="&#x26B2;"
                onClick={handleClick}
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading......";
  }
}
