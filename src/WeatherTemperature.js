import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function farenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFarenheit}>
            {" "}
            °F{" "}
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(farenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            °C{" "}
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}
