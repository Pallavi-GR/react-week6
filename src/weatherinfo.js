import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex p-2">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={64}
            />
            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15 %</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li> Wind : {props.data.wind} kmph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
